def rgb(r,g,b):
  
  qwe = [] #base list, separate though can be optimized to remove
  hex = { #dictionary with hex conversions
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  }
  #these variables can probably be better optimized
  y=0
  rgbs = [r,g,b]
  hexl = []
  for x in range(3): #error solutions
    if rgbs[x] <= 0:
      qwe.append('00')
    elif rgbs[x] < 10:
      qwe.append(0)
      qwe.append(rgbs[x])
    elif rgbs[x] > 255:
      qwe.append('FF')
    else: #main conversion calcs, floor division to use remainders
      qwe.append((rgbs[x])//16)
      qwe.append(int(((rgbs[x])/16-(rgbs[x]//16))*16))
  for i in qwe: #converts
    if qwe[y] in hex:
      hexn = hex.get(qwe[y])
      hexl.append(hexn)
      hexn = 0
      y+=1
    else: #for non alphabetical/characters above 9 where hex starts
      hexl.append(qwe[y])
      y+=1
  print(hexl)
  print(''.join(map(str,hexl))) #for tests/generally
  return(''.join(map(str,hexl))) #for codewars
  
rgb(232,246,352) #limit testing
