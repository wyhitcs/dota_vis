#Calculate the average distance of each player in a game.
import csv
import math
import time
#time_begin = time.time()

#nonvariable
Team = ['dire','radiant']
Header_Dire = ['Dsc_DireP1','Dsc_DireP2','Dsc_DireP3','Dsc_DireP4','Dsc_DireP5']
Header_Radiant = ['Dsc_RadiantP1','Dsc_RadiantP2','Dsc_RadiantP3','Dsc_RadiantP4','Dsc_RadiantP5']
match_list = []#unique match id list

#open the file and get the matche id for further process
with open('match_list.csv') as mlf:
    mlf_csv = csv.DictReader(mlf)
    for row in mlf_csv:
    	match_list.append(row['match_id'])

#open each match    	
for match_id in match_list:
	
	#name for data file
	parse_spilt_file_name = match_id +'.csv'
	#name for saving distance file
	parse_spilt_savingfile_name = "DistanceForMatch"+match_id+".csv"	
	
	xcurrent = [] # x,y coordinate for 5 members in a team at a moment
	ycurrent = []
	Distance_all = [] # distance for one people relative to other 4
	Distance_playeravg = [] #average distance for one people
	
	#get maximum time for each match
	tsync_max = 500	
	with open(parse_spilt_file_name) as f:
		f_csv = csv.DictReader(f)
		for row in f_csv:
			if(int(row['tsync'])>int(tsync_max)):
				tsync_max=int(row['tsync'])
	tsync_max = int(0.985*tsync_max)
	print(tsync_max)
	
	with open(parse_spilt_savingfile_name,'a',newline='') as t:
		t_csv = csv.writer(t)
		test_header = ['Time_Sync']+Header_Dire + Header_Radiant
		t_csv.writerow(test_header)
		#open the file for reading	
			#get x,y in time i
		for timei in range(0,tsync_max):
			#	searching in different moment
			Distance_playeravg = [] #for 10 players in two teams
			Distance_playeravg.append(timei)
			for team in range(0,2):
			#searching in each team			
				xcurrent = []
				ycurrent = []
				Distance_all = []			
				with open(parse_spilt_file_name) as f:
					f_csv = csv.DictReader(f)
					for row in f_csv:
						if row['tsync']== str(timei) and row['team']==Team[team]:
							xcurrent.append(row['x'])
							ycurrent.append(row['y'])		
					for mi in range(0,5):
						for mj in range(mi+1,5):
							xi = int(xcurrent[mi])					
							yi = int(ycurrent[mi])
							xj = int(xcurrent[mj])
							yj = int(ycurrent[mj])					
							Distance_all.append(math.sqrt((xi-xj)**2+(yi-yj)**2))						
					#calculate 5 player distances 		
					Distance_playeravg.append((Distance_all[0]+Distance_all[1]+Distance_all[2]+Distance_all[3])/4)
					Distance_playeravg.append((Distance_all[0]+Distance_all[4]+Distance_all[5]+Distance_all[6])/4)
					Distance_playeravg.append((Distance_all[1]+Distance_all[4]+Distance_all[7]+Distance_all[8])/4)
					Distance_playeravg.append((Distance_all[2]+Distance_all[5]+Distance_all[7]+Distance_all[9])/4)
					Distance_playeravg.append((Distance_all[3]+Distance_all[6]+Distance_all[8]+Distance_all[9])/4)
			t_csv.writerow(Distance_playeravg)
			print("Match:"+match_id+" "+"Moment:"+str(timei))
		
#calculate time for testing
#print(time.time()-time_begin)
			

			
			
	
	