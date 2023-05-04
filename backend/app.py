from flask import Flask
from evaluate_text import reference_text
from matching import ratingComment

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello World'

@app.route('/text/<text_id>', methods=["GET"])
def get_text(text_id):
  #text_idとlist参照してコメントと点数返したい
  count = reference_text(text_id)
  comment = ratingComment(int(count))
  return '%s' % comment

if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)

