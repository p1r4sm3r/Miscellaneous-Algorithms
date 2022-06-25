import string

def is_pangram(s):
  lst = []
  for x in s:
    #alpha returns if character is a letter
    if x.isalpha():
      lst.append(x.lower())
  alph = []
  for x in range(97,123):
    alph.append(chr(x))

  for x in lst:
    if x in alph:
      alph.remove(x)
  return True if len(alph) == 0 else False
  

is_pangram("The quick, brown fox jumps over the lazy dog!")
