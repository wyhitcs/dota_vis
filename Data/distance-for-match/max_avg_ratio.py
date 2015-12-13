# -*- encoding : utf-8 -*-
import csv 
import math
from itertools import izip

with open("max_avg_ratio.csv",'a') as f:
	f_csv = csv.writer(f)
	# matchlist_header = ['match_id','winner','dire_player_list','radiant_player_list']
	max_header = ['match_id','winner_ratio','loser_ratio']
	f_csv.writerow(max_header)
with open('each_team_max.csv', 'r') as f1, open('match_winner_tier_distance.csv', 'r') as f2:
	f1_csv = csv.DictReader(f1)
	f2_csv2 = csv.DictReader(f2)
	for row1, row2 in izip(f1_csv,f2_csv2):
		winner = row2['winner']
		dire_ratio = abs(float(row1['max_dire'])*2-float(row2['dire_avg_distance']))/float(row2['dire_avg_distance'])
		radiant_ratio =abs(float(row1['max_radiant'])*2-float(row2['radiant_avg_distance']))/float(row2['radiant_avg_distance'])
		if winner == 'radiant':
			winner_ratio = radiant_ratio
			loser_ratio = dire_ratio
		else:
			winner_ratio = dire_ratio
			loser_ratio = radiant_ratio
		with open("max_avg_ratio.csv",'a') as rf:
			rf_csv = csv.writer(rf)
			ratio_line = [row1['match_id'],winner_ratio,loser_ratio]
			rf_csv.writerow(ratio_line)