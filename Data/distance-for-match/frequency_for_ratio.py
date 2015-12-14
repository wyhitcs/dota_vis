# -*- encoding : utf-8 -*-
import csv
import numpy

winner_ratio=[]
loser_ratio=[]
with open('max_avg_ratio.csv') as f:
    f_csv = csv.DictReader(f)
    for row in f_csv:
    	winner_ratio.append(float(row['winner_ratio']))
    	loser_ratio.append(float(row['loser_ratio']))
    hist1, bin_edges1 = numpy.histogram(winner_ratio,20,[0,0.4],False,None)
    hist2, bin_edges2 = numpy.histogram(loser_ratio,20,[0,0.4],False,None)
    list_hist1 = hist1.tolist()
    list_hist2 = hist2.tolist()
    list_bin_edges = bin_edges1.tolist()
    # print list_hist1
    # print list_hist2
    with open('frequency_for_ratio.csv','a') as fref:
    	fref_csv = csv.writer(fref)
    	#fref_line = list_bin_edges
    	fref_line =['number','winner','loser']
    	fref_csv.writerow(fref_line)
    	# fref_hist1 = list_hist1
    	# fref_hist2 = list_hist2
    	# fref_csv.writerow(fref_hist1)
    	# fref_csv.writerow(fref_hist2)
    	i = 0
    	while i<20:
    		fref_n_line = [list_bin_edges[i],list_hist1[i],list_hist2[i]]
    		fref_csv.writerow(fref_n_line)
    		i = i+1
