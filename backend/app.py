from flask import Flask,jsonify
from evaluate_text import reference_text
from matching import ratingComment,matchingScore
import json

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello World'

@app.route('/api/evaluate/<text>', methods=["GET"])
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
  

if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)

