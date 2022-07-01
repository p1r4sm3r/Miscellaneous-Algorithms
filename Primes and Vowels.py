import math

def is_prime(n):
    if n <= 0 or n == 1:
        return False
    for i in range(2, (int)(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True

def get_count(sentence):
  vowels = 'aeiou' #all vowels
  count = 0
  for i in vowels: #for the number of vowels
    for j in sentence.lower(): #for the number of letters
      if i == j: #if current vowel == current letter
        count = count+1
  print(count) # to test
  return count
