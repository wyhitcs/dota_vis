# -*- encoding : utf-8 -*-
import csv

#put match id in match_list
match_list = []#unique match id list
#open the file and get the matches
with open('match_list.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	match_list.append(row['match_id'])
#init list tsync_num_list is for cal total number of tsync total_distance_list is for cal avg distance for each match
tsync_num_list=[0]*200
radiant_total_distance_list=[0]*200
dire_total_distance_list=[0]*200
radiant_avg_list=[0]*200
dire_avg_list=[0]*200
with open("../Data/master-distance.csv") as f:
		f_csv = csv.DictReader(f)

		for row in f_csv:
			match_index = match_list.index(row['match'])
			if row['tsync'] != 'NA':
				tsync_num_list[match_index] = row['tsync']

			if row['team'] == 'radiant':
				radiant_total_distance_list[match_index] = radiant_total_distance_list[match_index] + float(row['DD'])
			if row['team'] == 'dire':
				dire_total_distance_list[match_index] = dire_total_distance_list[match_index] + float(row['DD'])
		with open("match_avg_distance.csv",'a') as df:
			df_csv = csv.writer(df)
			match_distance_header = ['match_id','radiant_avg_distance','dire_avg_distance']
			df_csv.writerow(match_distance_header)
			for total_div_num in tsync_num_list:
				index = tsync_num_list.index(total_div_num)
				num_of_tsync = int(total_div_num)
				
				if num_of_tsync != 0:
					radiant_avg_list[index] = radiant_total_distance_list[index]/num_of_tsync
					dire_avg_list[index] = dire_total_distance_list[index]/num_of_tsync
				df_csv.writerow([match_list[index],radiant_avg_list[index],dire_avg_list[index]])

# print "number"
# print tsync_num_list
# print "radiant"
# print radiant_avg_list
# print "dire"
# print dire_avg_list
