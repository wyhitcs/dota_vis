# -*- encoding : utf-8 -*-
import csv

match_list = []#unique match id list

#open the file and get the matches
with open('match_list.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	match_list.append(row['match_id'])