def matchingPoint(score):
    score += 10
    return score

def ratingComment(score):
    #点数に応じて文字列返す
    a = 2
    b = 3
    if score <= a :
        return "string1"
    elif a < score < b:
        return "string2"
    elif b <= score:
        return "string3"