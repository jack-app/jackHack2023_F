from flask import Flask
from evaluate_text import reference_text
from matching import ratingComment,matchingScore

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello World'

@app.route('/text/<text>', methods=["GET"])
def get_text(text):
  #文字列(text)を受け取る
  #コメントとスコアを返す
  count = reference_text(text)
  score = matchingScore(int(count))
  comment = ratingComment(int(count))
  print(comment,score) #動作確認用
  return comment,score
  

if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)

