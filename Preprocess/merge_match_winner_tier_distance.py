# -*- encoding : utf-8 -*-
import csv
from itertools import izip

match_list = []#unique match id list

#open the file and get the matches
with open('match_list.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	match_list.append(row['match_id'])

mwtd_list=[]

with open('match_winner_player.csv', 'r') as f1, open('match_avg_distance.csv', 'r') as f2:
	f1_csv = csv.DictReader(f1)
	f2_csv2 = csv.DictReader(f2)
	for row1, row2 in izip(f1_csv,f2_csv2):
		temp = [row1['match_id'],row1['winner'],row1['tier'],row2['radiant_avg_distance'],row2['dire_avg_distance']]
		mwtd_list.append(temp)

with open("match_winner_tier_distance.csv",'a') as mwtdf:
	mwtdf_csv = csv.writer(mwtdf)
	# matchlist_header = ['match_id','winner','dire_player_list','radiant_player_list']
	mwtdf_header = ['match_id','winner','tier','radiant_avg_distance','dire_avg_distance']
	mwtdf_csv.writerow(mwtdf_header)
	for mwtd_row in mwtd_list:
		mwtdf_csv.writerow(mwtd_row)