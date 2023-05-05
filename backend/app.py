from flask import Flask,jsonify,render_template
from evaluate_text import reference_text
from matching import ratingComment,matchingScore
import json

app = Flask(__name__,template_folder='../frontend/dist',static_folder='../frontend/dist')



@app.route('/api/evaluate/1/<text>', methods=["GET"])
def get_text(text):
  #文字列(text)を受け取る
  #コメントとスコアを返す
  count = reference_text(text)
  score = matchingScore(count)
  comment = ratingComment(count)
  params = {
    'score': score,
    'comment': comment,
  }
  return jsonify(params)

@app.route('/',defaults={'path':'index.html'})
@app.route('/<path:path>')
def index(path):
  return app.send_static_file(path)


if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)

