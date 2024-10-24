# https://www.codewars.com/kata/56170e844da7c6f647000063/train/python

def people_with_age_drink(age):
    # given: number
    # return: string
    # example: 18 -> 'drink beer'
    # what if I input an incorrect data type?
    # what if I input nothing?
    # Psuedo: 
    #   if the number is < 14 return 'drink toddy'
    #   if the number is < 18 return 'drink coke'
    #   if the number is < 21 return 'drink beer'
    #   if the number is > 21 return 'drink whiskey'
    #   if the input is NaN return 'Need number input'
    #   if nothing is input retur 'Nothing was inputted.'
    
    # time complexity: o(1)
    # space complexity: o(1)
    
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    elif age >= 21:
        return "drink whisky"