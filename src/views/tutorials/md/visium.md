```python
from Visium import fileReader,Processer
import matplotlib.pyplot as plt
Reader=fileReader()
Reader.read_all(folder_path="Visium_Human_Breast_Cancer",gene_token="gene_token_homologs.csv",method="binary",key="symbol")
plt.imshow(Reader.raw_he)
Reader.adata , Reader.tissue_position_list , Reader.scaleJson
```

<pre class="output-text">
c:\Users\17763\AppData\Local\Programs\Python\Python312\Lib\site-packages\anndata\_core\anndata.py:1820: UserWarning: Variable names are not unique. To make them unique, call `.var_names_make_unique`.
  utils.warn_names_duplicates("var")
c:\Users\17763\AppData\Local\Programs\Python\Python312\Lib\site-packages\anndata\_core\anndata.py:1820: UserWarning: Variable names are not unique. To make them unique, call `.var_names_make_unique`.
  utils.warn_names_duplicates("var")

gene id matches:
human:15597 
mouse:16

(AnnData object with n_obs × n_vars = 4898 × 15757
     var: 'gene_ids_x', 'feature_types', 'genome', 'symbol_x', 'gene_ids_y', 'symbol_y',
                     in_tissue  array_row  array_col  pxl_row_in_fullres  \
 barcode                                                                   
 ACGCCTGACACGCGCT-1          1        0.0        0.0              4650.0   
 TACCGATCCAACACTT-1          1        1.0        1.0              4887.0   
 ATTAAAGCGGACGAGC-1          1        0.0        2.0              4651.0   
 GATAAGGGACGATTAG-1          1        1.0        3.0              4888.0   
 GTGCAAATCACCAATA-1          1        0.0        4.0              4653.0   
 ...                       ...        ...        ...                 ...   
 GAACGTTTGTATCCAC-1          1       77.0      123.0             22941.0   
 ATTGAATTCCCTGTAG-1          1       76.0      124.0             22706.0   
 TACCTCACCAATTGTA-1          1       77.0      125.0             22943.0   
 AGTCGAATTAGCGTAA-1          1       76.0      126.0             22707.0   
 TTGAAGTGCATCTACA-1          1       77.0      127.0             22944.0   
 
                     pxl_col_in_fullres  
 barcode                                 
 ACGCCTGACACGCGCT-1             12203.0  
 TACCGATCCAACACTT-1             12338.0  
 ATTAAAGCGGACGAGC-1             12475.0  
 GATAAGGGACGATTAG-1             12609.0  
 GTGCAAATCACCAATA-1             12747.0  
 ...                                ...  
 GAACGTTTGTATCCAC-1             28802.0  
 ATTGAATTCCCTGTAG-1             28939.0  
 TACCTCACCAATTGTA-1             29074.0  
 AGTCGAATTAGCGTAA-1             29211.0  
 TTGAAGTGCATCTACA-1             29345.0  
 
 [4992 rows x 5 columns],
    tissue_hires_scalef  tissue_lowres_scalef  fiducial_diameter_fullres  \
 0             0.048109              0.014433                   285.1934   
 
    spot_diameter_fullres  
 0               176.5483  )
</pre>

![output image 0-3](/tutorials/visium/1.png)

```python
processer=Processer(Reader,224)
processer.process_tpl()
processer.tissue_position_list
```

<pre class="output-text">
                    in_tissue  spot_y  spot_x  pxl_y_fullres  pxl_x_fullres  \
barcode                                                                       
ACGCCTGACACGCGCT-1          1     0.0     0.0         4650.0        12203.0   
TACCGATCCAACACTT-1          1     1.0     1.0         4887.0        12338.0   
ATTAAAGCGGACGAGC-1          1     0.0     2.0         4651.0        12475.0   
GATAAGGGACGATTAG-1          1     1.0     3.0         4888.0        12609.0   
GTGCAAATCACCAATA-1          1     0.0     4.0         4653.0        12747.0   
...                       ...     ...     ...            ...            ...   
GAACGTTTGTATCCAC-1          1    77.0   123.0        22941.0        28802.0   
ATTGAATTCCCTGTAG-1          1    76.0   124.0        22706.0        28939.0   
TACCTCACCAATTGTA-1          1    77.0   125.0        22943.0        29074.0   
AGTCGAATTAGCGTAA-1          1    76.0   126.0        22707.0        29211.0   
TTGAAGTGCATCTACA-1          1    77.0   127.0        22944.0        29345.0   

                    pxl_y_hires  pxl_x_hires top_left_before top_left_after  
barcode                                                                      
ACGCCTGACACGCGCT-1   223.708264   587.077837            None           None  
TACCGATCCAACACTT-1   235.110169   593.572593            None           None  
ATTAAAGCGGACGAGC-1   223.756373   600.163567            None           None  
GATAAGGGACGATTAG-1   235.158278   606.610214            None           None  
GTGCAAATCACCAATA-1   223.852592   613.249298            None           None  
...                         ...          ...             ...            ...  
GAACGTTTGTATCCAC-1  1103.675543  1385.644174            None           None  
ATTGAATTCCCTGTAG-1  1092.369857  1392.235148            None           None  
TACCTCACCAATTGTA-1  1103.771762  1398.729904            None           None  
AGTCGAATTAGCGTAA-1  1092.417966  1405.320879            None           None  
TTGAAGTGCATCTACA-1  1103.819871  1411.767526            None           None  

[4992 rows x 9 columns]
</pre>

```python
processer.round_spot()
processer.final_tpl
```

<pre class="output-text">
                    in_tissue  spot_y  spot_x  tl_x  tl_y
barcode                                                  
ACGCCTGACACGCGCT-1          1     0.0     0.0     4     0
TACCGATCCAACACTT-1          1     1.0     1.0    12    12
ATTAAAGCGGACGAGC-1          1     0.0     2.0    16     0
GATAAGGGACGATTAG-1          1     1.0     3.0    24    12
GTGCAAATCACCAATA-1          1     0.0     4.0    32     0
...                       ...     ...     ...   ...   ...
GAACGTTTGTATCCAC-1          1    77.0   123.0   804   880
ATTGAATTCCCTGTAG-1          1    76.0   124.0   808   872
TACCTCACCAATTGTA-1          1    77.0   125.0   816   880
AGTCGAATTAGCGTAA-1          1    76.0   126.0   824   872
TTGAAGTGCATCTACA-1          1    77.0   127.0   828   880

[4992 rows x 5 columns]
</pre>

```python
processer.generate_grid()
processer.map_tissue()
processer.tissue_grid
```

<pre class="output-text">
c:\Users\17763\Desktop\texture mapping\Visium.py:234: FutureWarning: Calling int on a single element Series is deprecated and will raise a TypeError in the future. Use int(ser.iloc[0]) instead
  self.array_forBarcode=expand_labels(self.array_forBarcode,distance=int(self.dia//4))

                tl_xn  tl_yn  in_tissue      position          barcode_55  \
index                                                                       
s_004_0_0-n       0.0    0.0        1.0   s_004_0_0-n                   0   
s_004_4_0-n       4.0    0.0        1.0   s_004_4_0-n                   0   
s_004_8_0-n       8.0    0.0        1.0   s_004_8_0-n                   0   
s_004_12_0-n     12.0    0.0        1.0  s_004_12_0-n                   0   
s_004_16_0-n     16.0    0.0        1.0  s_004_16_0-n  TACCGATCCAACACTT-1   
...               ...    ...        ...           ...                 ...   
s_004_744_-4-n    NaN    NaN        0.0           NaN                 new   
s_004_756_-4-n    NaN    NaN        0.0           NaN                 new   
s_004_772_-4-n    NaN    NaN        0.0           NaN                 new   
s_004_784_-4-n    NaN    NaN        0.0           NaN                 new   
s_004_796_-4-n    NaN    NaN        0.0           NaN                 new   

                spot_x  spot_y  
index                           
s_004_0_0-n        0.0     0.0  
s_004_4_0-n        1.0     0.0  
s_004_8_0-n        2.0     0.0  
s_004_12_0-n       3.0     0.0  
s_004_16_0-n       4.0     0.0  
...                ...     ...  
s_004_744_-4-n     NaN     NaN  
s_004_756_-4-n     NaN     NaN  
s_004_772_-4-n     NaN     NaN  
s_004_784_-4-n     NaN     NaN  
s_004_796_-4-n     NaN     NaN  

[50686 rows x 7 columns]
</pre>

```python
_,_,_,_,raw_crop_he,crop_he=processer.crop_img()
fig,axs=plt.subplots(1,2)
axs[0].imshow(raw_crop_he)
axs[1].imshow(crop_he)
```

<pre class="output-text">
<matplotlib.image.AxesImage at 0x1f3c225d6d0>
</pre>

![output image 4-1](/tutorials/visium/2.png)

```python
processer.find_avg_grid()
processer.avg_grid
```

<pre class="output-text">
                 tl_xn  tl_yn  in_tissue         position          barcode_55  \
index                                                                           
s_004_16_0-n      16.0    0.0        1.0     s_004_16_0-n  TACCGATCCAACACTT-1   
s_004_20_0-n      20.0    0.0        1.0     s_004_20_0-n  TACCGATCCAACACTT-1   
s_004_24_0-n      24.0    0.0        1.0     s_004_24_0-n  TACCGATCCAACACTT-1   
s_004_28_0-n      28.0    0.0        1.0     s_004_28_0-n  GATAAGGGACGATTAG-1   
s_004_32_0-n      32.0    0.0        1.0     s_004_32_0-n  GATAAGGGACGATTAG-1   
...                ...    ...        ...              ...                 ...   
s_004_696_896-n  696.0  896.0        1.0  s_004_696_896-n  ATCTCATAAACCTACC-1   
s_004_700_896-n  700.0  896.0        1.0  s_004_700_896-n  TTGCAGGTCATGAAGT-1   
s_004_704_896-n  704.0  896.0        1.0  s_004_704_896-n  TTGCAGGTCATGAAGT-1   
s_004_708_896-n  708.0  896.0        1.0  s_004_708_896-n  TTGCAGGTCATGAAGT-1   
s_004_712_896-n  712.0  896.0        1.0  s_004_712_896-n  TTGCAGGTCATGAAGT-1   

                 spot_x  spot_y  
index                            
s_004_16_0-n        4.0     0.0  
s_004_20_0-n        5.0     0.0  
s_004_24_0-n        6.0     0.0  
s_004_28_0-n        7.0     0.0  
s_004_32_0-n        8.0     0.0  
...                 ...     ...  
s_004_696_896-n   174.0   224.0  
s_004_700_896-n   175.0   224.0  
s_004_704_896-n   176.0   224.0  
s_004_708_896-n   177.0   224.0  
s_004_712_896-n   178.0   224.0  

[45458 rows x 7 columns]
</pre>

```python
processer.insert_grid()
processer.interp_grid
```

<pre class="output-text">
3839

                 tl_xn  tl_yn  in_tissue      position barcode_55  spot_x  \
index                                                                       
s_004_0_0-n        0.0    0.0        1.0   s_004_0_0-n          0     0.0   
s_004_4_0-n        4.0    0.0        1.0   s_004_4_0-n          0     1.0   
s_004_8_0-n        8.0    0.0        1.0   s_004_8_0-n          0     2.0   
s_004_12_0-n      12.0    0.0        1.0  s_004_12_0-n          0     3.0   
s_004_52_0-n      52.0    0.0        1.0  s_004_52_0-n          0    13.0   
...                ...    ...        ...           ...        ...     ...   
s_004_880_896-n  880.0  896.0        1.0           NaN        new   220.0   
s_004_884_896-n  884.0  896.0        1.0           NaN        new   221.0   
s_004_888_896-n  888.0  896.0        1.0           NaN        new   222.0   
s_004_892_896-n  892.0  896.0        1.0           NaN        new   223.0   
s_004_896_896-n  896.0  896.0        1.0           NaN        new   224.0   

                 spot_y  
index                    
s_004_0_0-n         0.0  
s_004_4_0-n         0.0  
s_004_8_0-n         0.0  
s_004_12_0-n        0.0  
s_004_52_0-n        0.0  
...                 ...  
s_004_880_896-n   224.0  
s_004_884_896-n   224.0  
s_004_888_896-n   224.0  
s_004_892_896-n   224.0  
s_004_896_896-n   224.0  

[3839 rows x 7 columns]
</pre>

```python
processer.concat_adata()
processer.fnl_adata
```

<pre class="output-text">
AnnData object with n_obs × n_vars = 50686 × 15757
    var: 'gene_ids_x', 'feature_types', 'genome', 'symbol_x', 'gene_ids_y', 'symbol_y'
</pre>
