import csv

#删除626684019 643216184

with open("each_team_max.csv",'a') as f:
	f_csv = csv.writer(f)
	# matchlist_header = ['match_id','winner','dire_player_list','radiant_player_list']
	max_header = ['match_id','max_dire','max_radiant']
	f_csv.writerow(max_header)
	with open('distance_max.csv') as df:
		df_csv = csv.DictReader(df)
		for row in df_csv:
			max_dire = row['dire_avg1']
			max_radiant = row['radiant_avg1']
			if row['dire_avg1'] < row['dire_avg2']:
				max_dire = row['dire_avg2']
			if row['dire_avg2'] < row['dire_avg3']:
				max_dire = row['dire_avg3']
			if row['dire_avg3'] < row['dire_avg4']:
				max_dire = row['dire_avg4']
			if row ['dire_avg4'] < row['dire_avg5']:
				max_radiant = row['dire_avg5'] 
			if row['radiant_avg1'] < row['radiant_avg2']:
				max_radiant = row['radiant_avg2']
			if row['radiant_avg2'] < row['radiant_avg3']:
				max_radiant = row['radiant_avg3']
			if row['radiant_avg3'] < row['radiant_avg4']:
				max_radiant = row['radiant_avg4']
			if row ['dire_avg4'] < row['radiant_avg5']:
				max_radiant = row['radiant_avg5'] 
			max_line = [row['match_id'],max_dire,max_radiant]
			f_csv.writerow(max_line)
