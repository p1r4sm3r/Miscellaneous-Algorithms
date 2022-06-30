def is_valid_IP(strng):
  octets = 3
  list = []
  sectionindex=[]
  try:
    if len(strng) == 0:
      return False
    for l in range(len(strng)):
      if strng[l].isdigit() != True:
        if strng[l] != '.':
          return False
    for i in range(len(strng)):
      if strng[i].isdigit() != True:
        return False
      elif len(strng) == 0:
        return False
      else:
        for i in range(len(strng)):
          if strng[i] == '.':
            octets -= 1
          else:
            continue
        if octets == 0:
          for i in range(len(strng)):
            if strng[i] == '.':
              sectionindex.append(i)
              continue
            else:
              list.append(strng[i])
        else:
          return False
        check = []
        x=0
      for i in sectionindex:
        check.append(strng[x:i])
        x=i+1
      check.append(strng[sectionindex[-1]+1:])
      for i in range(len(check)):
        if len(check[i]) == 1:
          if check[i][0] == '0':
            continue
          elif check[i][0] == '1':
            continue
          else:
            continue
        else:
          if check[i][0] == '0':
            return False
      for i in range(len(check)):
        if int(check[i]) <= 255:
          continue
        else:
          return False
      return True
  except:
    return False
