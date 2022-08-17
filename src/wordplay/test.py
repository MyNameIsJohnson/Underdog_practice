# constList = [
#     'BALL',
#     'BEACH',
#     'MAN',
#     'KEEPER',
#     'SNOW',
#     'SNOWMAN'
#     'RAN',
#     'ZOO',
#     'ZOOKEEPER'
# ]

# memoObject = {}
# answerArray = []

# #Here we build the memoization object
# for word in constList:
#     memoObject[word] = word

# #Loop Through the Word List
# for word in constList:
#     #Loop through the letters of each word and keep track of our index
#     for i in range(len(word)):
#         #Is the 0th through i in our memo object? 
#         if word[0:i] not in memoObject:
#             continue
#         #Here we find it
#         else:
#             #Now we check if the second part of the word is in the list
#             if word[i:] not in memoObject:
#                 continue
#             #Here we find it and add it to an answer array.
#             else:
#                 answerArray.append(word)
# print(answerArray)

