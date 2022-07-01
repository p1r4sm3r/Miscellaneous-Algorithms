def pig_it(text):
    list = []
    test = []
    final = []
    for i in range(len(text)):
        list.append(text[i])
    list.append(' ')
    for i in list:
        if i == ' ':
            print(test)
            try:
                test.extend([test.pop(0), 'ay'])
            except:
                pass
            final.append(''.join(test))
            test = []
        elif i.isalnum() != True: final.append(i)
        else: test.append(i)
    return (' '.join(final)).strip()
  
  def last_digit(n1, n2):
    if n2 == 0: return 1
    lbase, rpow = int(str(n1)[-1]), n2%4
    if rpow == 0: rpow = 4
    return int((str((lbase**rpow))[-1]))
