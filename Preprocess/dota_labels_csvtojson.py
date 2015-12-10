#convert Dota Labels.csv to json format

import csv
import sys
import json


csvfile = open('../Data/Dota Labels.csv', 'r')
jsonfile = open('../dotalabel_json.js', 'w')

fieldnames = ("x","y","Section Label","Label Value")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')