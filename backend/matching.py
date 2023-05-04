def matchingScore(count):
    #score算出
    score = count * 10
    return score

def ratingComment(score):
    #点数に応じて文字列返す
    a = 20 #a,bは仮
    b = 30
    if score <= a :
        return "string1"
    elif a < score < b:
        return "string2"
    elif b <= score:
        return "string3"