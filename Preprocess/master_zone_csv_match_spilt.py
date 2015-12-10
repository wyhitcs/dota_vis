# -*- encoding : utf-8 -*-
import csv

match_list = []#unique match id list

#open the file and get the matches
with open('../Data/master-zones.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	spilt_file_name = row['match'] + '.csv'
    	row_header=['t','x','y','team','player','won','tstd','tsync','tper','tier','zone']
    	# with open(spilt_file_name,'a') as wf:
	    # 	wf_csv = csv.writer(wf)
	    # 	wf_csv.writerow(row_header)
    	row_in_csv=[row['t'],row['x'],row['y'],row['team'],row['player'],row['won'],row['tstd'],row['tsync'],row['tper'],row['tier'],row['zone']]
    	#print row_in_csv
    	if row['match'] not in match_list:
    		match_list.append(row['match'])

    		spilt_file_name = row['match'] + '.csv'
    		row_header=['t','x','y','team','player','won','tstd','tsync','tper','tier','zone']
    		with open(spilt_file_name,'a') as wf:
	    		wf_csv = csv.writer(wf)
	    		wf_csv.writerow(row_header)
    	with open(spilt_file_name,'a') as wf:
	    	wf_csv = csv.writer(wf)
	    	wf_csv.writerow(row_in_csv)
i = 1
with open("match_list.csv",'a') as matchlistf:
	matchlist_csv = csv.writer(matchlistf)
	matchlist_header = ['match_id']
	matchlist_csv.writerow(matchlist_header)
for match_id in match_list:
	with open("match_list.csv",'a') as matchlistf:
		matchlist_csv = csv.writer(matchlistf)
		matchlist_in_csv = [match_id]
		matchlist_csv.writerow(matchlist_in_csv)
    
i =1
for match_id in match_list:
	# print i ," ", id	
	parse_spilt_file_name = match_id +'.csv'
	winner = 2
	with open(parse_spilt_file_name) as pf:
		pf_csv = csv.DictReader(pf)
		dire_player_list = []
		radiant_player_list = []
		player_list = dire_player_list + radiant_player_list
		
		for row in pf_csv:
			if winner ==2:
				if row['won'] == 0:
					if row['team'] == 'dire':
						winner = 'radiant'
					if row['team'] == 'radiant':
						winner = 'dire'
				if row['won'] == 1:
					if row['team'] == 'dire':
						winner = 'dire'
					if row['team'] == 'radiant':
						winner = 'radiant'
				# print winner
			exist = 0
			for sublist in player_list:
				if sublist[0] == row['player']:
					exist = 1
			if exist == 0:
				if row['team'] == 'dire':
					dire_player_list.append([row['player'],row['tier']])
				if row['team'] == 'radiant':
					radiant_player_list.append([row['player'],row['tier']])
			player_list = dire_player_list + radiant_player_list
	match_row_in_csv = [match_id,winner,dire_player_list,radiant_player_list]
	with open("match_winner_player.csv",'a') as mwpf:
		mwpf_csv = csv.writer(mwpf)
		mwpf_csv.writerow(match_row_in_csv)
	# print i ," ", id
	# print "winner: ", winner
	# print "dire: ", dire_player_list
	# print "radiant: ",radiant_player_list
	i = i+1