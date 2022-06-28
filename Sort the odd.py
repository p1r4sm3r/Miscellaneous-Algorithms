def sort_array(source_array):
  pos = []
  sorted = []
  final = []
  breakFlag = False
  y=0
  for i in ([i for i,x in enumerate(source_array) if (x%2)!=0]):
    pos.append(int(i))
  for i in pos:
    sorted.append(source_array[i])
  sorted.sort()
  for i in pos:
    for x in range(len(source_array)):
      if len(final) == len(source_array):
        breakFlag = True
      elif source_array[x] % 2 != 0:
        final.append(sorted[y])
        y+=1
      else:
        final.append(source_array[x])
      if breakFlag == True:
        break
  for i in range(len(final)-len(source_array)):
    final.pop()
  print(final)
