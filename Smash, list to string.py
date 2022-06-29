def smash(words):
  length = len(words)
  ord = 0
  order = []
  while length != 0:
    order.append(words[ord])
    ord +=1
    length-=1
  print(*order, sep = ' ')

smash(["this", "is", "a", "sentence"])
