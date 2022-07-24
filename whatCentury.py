def what_century(year):
    if year[2:4]=='00':
        cent = str(int(year[:2]))
    else:
        cent = str(int(year[:2])+1)
    if int(year)>1999:
        if cent[1]=='1':
            return cent+'st'
        elif cent[1]=='2':
                return cent+'nd'    
        elif cent[1]=='3':
                return cent+'rd'
        else:
            return cent+'th'
    else:
        return cent+'th'
