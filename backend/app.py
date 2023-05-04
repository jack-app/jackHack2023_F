from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello World'

@app.route('/text/<text_id>', methods=["GET"])
def get_text(text_id):
  #text_idとlist参照してコメントと点数返したい
  return '%sを参照する' % text_id

if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)

