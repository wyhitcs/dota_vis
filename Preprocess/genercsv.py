# -*- encoding : utf-8 -*-
import csv
import math
import random

with open("stack_gen.csv",'a') as f:
	f_csv = csv.writer(f)
	# matchlist_header = ['match_id','winner','dire_player_list','radiant_player_list']
	stack_header = ['match_id','winner_distace_ratio','loser_distace_ratio']
	f_csv.writerow(stack_header)
	n = 196
	while n > 0:
		id = 196 -n +1
		winner = random.uniform(0,1)
		loser = random.uniform(0, 1)
		stack_line = [id,winner,loser]
		f_csv.writerow(stack_line)
		n = n - 1
