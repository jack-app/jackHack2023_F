def matchingScore(count):
    #score算出
    score = count * 10
    return score

def ratingComment(score):
    #点数に応じて文字列返す
    if score <= 20 :
        return "もう！ふんずけるわよあんた！毎日ちゃんと風呂入っとんの？！"
    elif 20 < score < 60:
        return "うーん、微妙だわねえ、今後に期待かしら"
    elif 60 <= score:
        return "なかなかやればできるじゃない。あなたは磨きがいがある子猫ちゃんよ！"