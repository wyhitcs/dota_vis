# -*- encoding : utf-8 -*-
import csv

match_list = []#unique match id list

#open the file and get the matches
with open('match_list.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	match_list.append(row['match_id'])
with open("distance_max.csv",'a') as f:
	f_csv = csv.writer(f)
	# matchlist_header = ['match_id','winner','dire_player_list','radiant_player_list']
	max_header = ['match_id','dire_avg1','dire_avg2','dire_avg3','dire_avg4','dire_avg5','radiant_avg1','radiant_avg2','radiant_avg3','radiant_avg4','radiant_avg5']
	f_csv.writerow(max_header)

for match_id in match_list:

	parse_spilt_file_name = 'DistanceForMatch'+ match_id +'.csv'
	try:
		with open(parse_spilt_file_name) as df:
			df_csv = csv.DictReader(df)
			sync = 0
			dire_avg1 = 0
			dire_avg2 = 0
			dire_avg3 = 0
			dire_avg4 = 0
			dire_avg5 = 0
			radiant_avg1 = 0
			radiant_avg2 = 0
			radiant_avg3 = 0
			radiant_avg4 = 0
			radiant_avg5 = 0
			for d_row in df_csv:
				sync =sync+1
				try:
					dire_avg1 = dire_avg1 + float(d_row['Dsc_DireP1'])
					dire_avg2 = dire_avg2 + float(d_row['Dsc_DireP2'])
					dire_avg3 = dire_avg3 + float(d_row['Dsc_DireP3'])
					dire_avg4 = dire_avg3 + float(d_row['Dsc_DireP4'])
					dire_avg5 = dire_avg4 + float(d_row['Dsc_DireP5'])
					radiant_avg1 = radiant_avg1 + float(d_row['Dsc_RadiantP1'])
					radiant_avg2 = radiant_avg2 + float(d_row['Dsc_RadiantP2'])
					radiant_avg3 = radiant_avg2 + float(d_row['Dsc_RadiantP3'])
					radiant_avg4 = radiant_avg3 + float(d_row['Dsc_RadiantP4'])
					radiant_avg5 = radiant_avg5 + float(d_row['Dsc_RadiantP5'])
				except ValueError,e:
					print "error",e,"on line",parse_spilt_file_name,d_row['Time_Sync']
				# dire_avg1 = dire_avg1 + float(d_row['Dsc_DireP1'])
				# dire_avg2 = dire_avg2 + float(d_row['Dsc_DireP2'])
				# dire_avg3 = dire_avg3 + float(d_row['Dsc_DireP3'])
				# dire_avg4 = dire_avg3 + float(d_row['Dsc_DireP4'])
				# dire_avg5 = dire_avg4 + float(d_row['Dsc_DireP5'])
				# radiant_avg1 = radiant_avg1 + float(d_row['Dsc_RadiantP1'])
				# radiant_avg2 = radiant_avg2 + float(d_row['Dsc_RadiantP2'])
				# radiant_avg3 = radiant_avg2 + float(d_row['Dsc_RadiantP3'])
				# radiant_avg4 = radiant_avg3 + float(d_row['Dsc_RadiantP4'])
				# radiant_avg5 = radiant_avg5 + float(d_row['Dsc_RadiantP5'])
			if sync != 0:
				dire_avg1 = dire_avg1/sync
				dire_avg2 = dire_avg2/sync
				dire_avg3 = dire_avg3/sync
				dire_avg4 = dire_avg4/sync
				dire_avg5 = dire_avg5/sync
				radiant_avg1 = radiant_avg1/sync
				radiant_avg2 = radiant_avg2/sync
				radiant_avg3 = radiant_avg3/sync
				radiant_avg4 = radiant_avg4/sync
				radiant_avg5 = radiant_avg5/sync
				avg_line = [match_id,dire_avg1,dire_avg2,dire_avg3,dire_avg4,dire_avg5,radiant_avg1,radiant_avg2,radiant_avg3,radiant_avg4,radiant_avg5]
				with open("distance_max.csv",'a') as pf:
					pf_csv = csv.writer(pf)
					pf_csv.writerow(avg_line)
	except IOError,e:
		print "fail"
					#print "error",e,"on line",parse_spilt_file_name,d_row['Time_Sync']
