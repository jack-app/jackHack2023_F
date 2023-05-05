import MeCab
import csv

def reference_text(text: str):
  t = MeCab.Tagger("-O wakati")
  parse_text = t.parse(text).rstrip().split()

  # ワードリスト取得
  with open('wordlist.csv', 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    wordlist = [ row for row in reader ]

  # ワードリスト照合
  matched_num_list = [
      wordlist[i].count(word)
      for i in range(len(wordlist))
    for word in parse_text
  ]
  matched_num_sum = sum(matched_num_list)

  return(int(matched_num_sum))