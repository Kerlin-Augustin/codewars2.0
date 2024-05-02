# https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions/python

def count_smileys(arr):
    eyes = [":", ";"]
    nose = ["-", "~"]
    mouth = [")", "D"]
    answer = 0
    for emoji in arr:
        if len(emoji) == 2:
            if emoji[0] in eyes and emoji[1] in mouth:
                answer += 1
        if len(emoji) == 3:
            if emoji[0] in eyes and emoji[1] in nose and emoji[2] in mouth:
                answer += 1
    return answer