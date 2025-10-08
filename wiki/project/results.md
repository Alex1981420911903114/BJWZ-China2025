# Results
---
## I. Validation of Suicide Plasmids

![results1](https://static.igem.wiki/teams/5838/results/results1.webp)
<center><b><i>Fig. 1. Plasmid schematic of pSuicide</i></b></center>

Because we first considered the issue of maintaining biosafety when choosing the chassis strain for the design project, it was necessary to introduce an exogenous suicide system. With the support of the collaborating university, we obtained the pSuicide (regulated by the arabinose operon and ccdB gene expression; T7 promoter and RNA thermometer regulate MazE/F expression), and after expanding the culture, we extracted the plasmids. The results are as follows:

![results2](https://static.igem.wiki/teams/5838/results/results2.webp)
<center><b><i>Fig. 2. pSuicide electrophoresis results</i></b></center>

The topmost band lengths in lanes 1 and 2 were approximately 5000 bp, close to the length of the plasmid pSuicide at 5044 bp, and the supercoiled band is at 2500 bp. We used the restriction enzymes Sal I and Mlu I to digest the plasmid pSuicide and then performed electrophoresis, with the results as follows:

![results3](https://static.igem.wiki/teams/5838/results/results3.webp)
<center><b><i>Fig. 3. Electrophoresis results of pSuicide enzyme digestion products</i></b></center>

In lanes 1, 2, and 3, the plasmids all have three bands with lengths of approximately 3000 bp, 1100 bp, and 1000 bp, which are close to the lengths of the products after plasmid pSuicide is digested with Sal I and Mlu I enzymes, which are 2388 bp, 1296 bp, and 1092 bp respectively. 
From the above, we deduced that the plasmid pSuicide we obtained was correct.

## II. Transformation of the Plasmid pSuicide

We transformed the plasmid pSuicide into the host strain BL21 (DE3), plated onto LB solid medium supplemented with streptomycin, and incubated overnight at 37°C to test the thermo-controlled suicide system. After multiple rounds of transformation and overnight incubation, only one colony appeared on one plate, as shown in Fig. 4 (left). Previously, the transformation into DH5α for amplification and plasmid extraction showed no abnormalities, and after streak purification, the colonies still survived well, as shown in Fig. 4 (right). We realized that the suicide system of pSuicide might exhibit leaky expression in BL21 (DE3).

![results4](https://static.igem.wiki/teams/5838/results/results4.webp)
<center><b><i>Fig. 4. Results of pSuicide transformation</i></b></center>

Upon analysis, we believed there were three possible reasons for this phenomenon: 
First, the premature expression of toxic genes: both “ccdB” and “MazF” on the vector are toxic genes; the ccdB protein inhibited DNA gyrase activity leading to host cell death; or MazF was an RNase that could degrade mRNA. If either of these genes were expressed prematurely after transformation, it could directly kill the BL21(DE3) host. 
Second, leaky expression of regulatory elements: the arabinose operon (araBAD promoter) theoretically requires arabinose induction, but there may be basal leakage (especially with high-copy vectors), resulting in low-level expression of ccdB.
Third, if the temperature-sensitive switch does not effectively close at the culture temperature (such as 37°C), it may initiate the expression of MazE/F, which could potentially be lethal even if the induction conditions are not met.

## III. Using pCDFDuet-ccdB plasmid as a suicide plasmid
Initially, we designed a plasmid that simultaneously had a temperature-controlled MazE/F system and an arabinose-regulated ccdB system, but the suicide system was not functioning properly. Therefore, we improved the suicide system.
We digested the plasmid pET-21b with enzymes Xba I and Xho I, and recovered the plasmid backbone. The T7-RBS-MazE/F was recovered by PCR, with the results as follows:

![results5](https://static.igem.wiki/teams/5838/results/results5.webp)
<center><b><i>Fig. 5. Electrophoresis results of MazE/F fragment</i></b></center>

The plasmid bands in lanes 2 and 3 are approximately 814 bp in length, which is the size of the target band. Similarly, we constructed the lac operon-regulated MazE/F system. The target fragment was ligated into the pET-21b plasmid using In-Fusion, and the target plasmid was obtained after transformation, screening, and purification.

![results6](https://static.igem.wiki/teams/5838/results/results6.webp)
<center><b><i>Fig. 6. Plasmid schematics of pET-21b-RBS-MazE/F and pET-21b-(lac)-MazE/F</i></b></center>

After overnight culture at 37°C on LB plates with the corresponding resistance, the temperature control group failed to grow transformants, while the lactose group successfully grew transformants. The transformants from the lactose group were inoculated into 5 mL of liquid LB medium containing different concentrations (mM) of IPTG and the corresponding antibiotics, and cultured overnight at 37°C, 160 rpm. However, under the induction of IPTG in each group, the bacteria were unable to effectively complete the suicide.

![results7](https://static.igem.wiki/teams/5838/results/results7.webp)
<center><b><i>Fig. 7. Growth of transformants in the lactose group</i></b></center>

The experiments above demonstrated that the MazE/F system in the engineered bacteria could not complete the suicide as required. Therefore, we removed the MazE/F suicide system and used only the arabinose-regulated ccdB suicide system, with pCDFDuet-1 as the vector.

![results8](https://static.igem.wiki/teams/5838/results/results8.webp)
<center><b><i>Fig. 8. Plasmid schematic of pCDFDuet-1-ccdB</i></b></center>

We transformed the plasmid pCDFDuet-ccdB into BL21 (DE3), spread it on a solid LB plate with streptomycin resistance, incubated overnight at 37°C, performed colony PCR for verification, and obtained the engineered bacteria BL21-T1 transformants. The results are as follows:

![results9](https://static.igem.wiki/teams/5838/results/results9.webp)
<center><b><i>Fig. 9. Colony PCR electrophoresis results of BL21-T1 bacteria</i></b></center>

As can be seen from the figure, most of the lanes show bands, proving that the BL21-T1 transformants have been successfully transformed, and the plasmid pCDFDuet-ccdB can stably exist in this strain without causing uncontrolled leakage.

## IV. Determination of Suicide Efficiency

The growth of E. coli was observed by overnight culture at different arabinose concentrations, and the OD600 was measured using a UV spectrophotometer to verify whether BL21-T1 was growing normally.
The original bacterial solution with OD600=0.8 was taken, 100 μL was spread onto solid medium containing different concentrations of arabinose, and incubated overnight at 37°C. The number of single colonies was counted, and the results are as follows:

![results10](https://static.igem.wiki/teams/5838/results/results10.webp)
<center><b><i>Fig. 10. Growth of single bacteria on solid media with different concentrations of arabinose</i></b></center>

In our first attempt, the initial reference concentration of arabinose was too low. At concentrations of 0.2 g/L and below, the growth was almost entirely in the form of bacterial lawns (Fig. 10), indicating that the concentration was not suitable and needed further adjustment.
For our second attempt, 100 μL of the original bacterial solution with OD600=0.8 was spread onto solid media containing different concentrations of arabinose and incubated overnight at 37°C. The number of single colonies was then counted. Increasing the concentration of arabinose used for induction, a noticeable suicidal efficiency was observed only at concentrations of 0.5 g/L and above. The results are shown in Table 1.

<center><b><i>Table 1. Colony numbers on plates with different concentrations of arabinose</i></b></center>

| Concentration(g/L)→<br>Groups↓ | 0 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 |
| :--------------------------: | - | --- | --- | --- | --- | --- | --- | --- |
| 1 | ＞300 | ＞300	| ＞300 | ＞300	| 221 | 50 | ＞300 | 203 |
| 2	| ＞300	| ＞300	| ＞300	| 225 | 285 | 115 | ＞300 | 281 |
| 3	| ＞300	| ＞300	| ＞300	| 199 | 201	| 203 | ＞300 | 131 |
| Average | ＞300 | ＞300 | ＞300 | 241	| 236 | 123 | ＞300 | 205 |`


Since the desired suicidal efficiency had not yet been achieved, a higher concentration of inducer was set with a focus on 0.5 g/L. Overnight culture results showed that a concentration of 0.25 g/L already exhibited a significant suicidal efficiency within the experimental range (Fig. 11); measuring OD600 revealed that a concentration of 0.5~0.6 g/L of arabinose yielded the optimal suicidal efficiency on the BL21-T1 engineered strain (Fig. 12). Therefore, for our engineered strain, a concentration of approximately 0.6 g/L of arabinose is required to induce a relatively strong suicidal efficiency caused by the ccdB protein in a liquid environment.

![results11](https://static.igem.wiki/teams/5838/results/results11.webp)
<center><b><i>Fig. 11. Growth of the strain under different concentrations of arabinose</i></b></center>

![results12](https://static.igem.wiki/teams/5838/results/results12.webp)
<center><b><i>Fig. 12. Growth curves of BL21-T1 monitored by OD600 measurements</i></b></center>


## V. Transformation and Functional Verification of pET-28a-CrcB

### 1. Transformation of pET-28a-CrcB

![results13](https://static.igem.wiki/teams/5838/results/results13.webp)
<center><b><i>Fig. 13. pET-28a-CrcB plasmid schematic</i></b></center>

We then prepared BL21-T1 competent cells and transformed the plasmid pET-28a-CrcB using heat shock transformation. We plated them onto LB solid agar plates containing the appropriate antibiotics and incubated overnight at 37°C. After picking single colonies ,we performed colony PCR using both ccdB and crcB primers to verify the transformants, obtaining transformant BL21-T2.The results are as follows:

![results14](https://static.igem.wiki/teams/5838/results/results14.webp)
<center><b><i>Fig. 14. BL21-T2 colony PCR electrophoresis results</i></b></center>

Lanes 1, 4, 5, 7, and 9 simultaneously show bands for ccdB and crcB, proving that the plasmid pET-28a-CrcB has been successfully transformed and can stably exist within this bacterial strain (Fig. 14).

### 2. Functional validation of pET-28a-CrcB

We selected the number 4 transformant using an inoculation loop to purify on LB solid medium containing the corresponding antibiotic. We inoculated a single colony into 5 mL of liquid LB medium with the corresponding antibiotic and cultured at 37°C, 200 rpm for 18 h. We took 10ul and dropped onto LB medium containing different concentrations of NaF, and cultured at 37℃ for 48 hours.

![results15](https://static.igem.wiki/teams/5838/results/results15.webp)
<center><b><i>Fig. 15. Growth of strains under different NaF concentrations</i></b></center>

As can be seen from the results, whether NaF was added or not, the colonies turned bright cherry red (the color of mCherry), and the color deepened with the extension of the culture time.
Analyzing the possible reasons: 
1. After the riboswitch positive regulatory switch is activated by F ions, the expression level of mCherry accumulates sufficiently over time, and the bacterial density is large enough that the color of the protein itself can be observed without fluorescence excitation. Because the chemical structure of the mCherry chromophore(p-hydroxybenzylideneimidazolinone) determines that it appears red under natural light (absorbing blue-green light and reflecting red light). Even without excitation light to induce fluorescence, the high expression of mCherry protein accumulated in the cells still causes the colonies to appear bright cherry red.

2. Even in the case of 0 mM NaF, the colonies also appeared cherry red. It may be that the water used to prepare the culture medium or the culture medium itself has a trace amount of F ion residue, and the trace F⁻ activates the ribose switch, causing mCherry expression. The high concentration of protein is visible to the eye due to the chromophore reflecting red light.

3. Based on the reasons above, after changing the culture medium and the water used for preparation, neither the CrcB protein nor the mCherry of the engineered bacteria were expressed in the 0 mM NaF condition (Fig. 16).

![results16](https://static.igem.wiki/teams/5838/results/results16.webp)
<center><b><i>Fig. 16. No mCherry expression leakage was observed in the different transformants under 0 mM NaF conditions</i></b></center>

In summary, it has been proven that the plasmid pET-28a-CrcB can function in the engineered strain BL21-T2.

## VI. Transformation and Functional Verification of pET-20b-dhaA

### 1. Transformation of pET-20b-dhaA
![results17](https://static.igem.wiki/teams/5838/results/results17.webp)
<center><b><i>Fig. 17. pET-20b-dhaA Plasmid schematic</i></b></center>

We transformed the pET-20b-dhaA plasmid into BL21-T2 competent cells, activated them, and then inoculated them onto LB solid medium containing the appropriate antibiotics. After incubating at 37°C overnight, we performed colony PCR verification. The results are shown as follows:

![results18](https://static.igem.wiki/teams/5838/results/results18.webp)
<center><b><i>Fig. 18. Colony PCR electrophoresis results of BL21-T3 transformants</i></b></center>

From this, it is evident that lanes 4, 10, 11, 12, 16, 17, and 18 each have corresponding bands in every gel, proving that the transformation of the plasmid pET-20b-dhaA into these transformants was successful, and that the other two components remain stably present in the engineered bacteria.

### 2. Validation of pET-20b-dhaA function

![Table2](https://static.igem.wiki/teams/5838/results/table2.webp)
<center><b><i>Table 2. PFAS Concentrations</i></b></center>

According to the concentration gradient set in Table 2, different concentrations of perfluorobutyric acid (PFBA) and perfluorooctanoic acid (PFOA) were added and cultured at 37°C for 16 h, and the OD600 values were measured. The results are as follows:

![results19](https://static.igem.wiki/teams/5838/results/results19.webp)
<center><b><i>Fig. 19. Fitting curves of OD600 values with different concentrations of PFBA and PFOA</i></b></center>

PFOA has a longer carbon chain and can easily disrupt the integrity of cell membranes through hydrophobic interactions, thereby inducing oxidative stress; PFBA has a shorter carbon chain, higher water solubility, and weaker bioaccumulation, resulting in less damage to structures such as cell membranes. At low concentrations, it may induce adaptive metabolic adjustments in bacteria, or because it interferes less with cell functions, the growth response of bacteria may differ from that of PFOA.
The red dashed line in the figure represents the effect of PFOA concentration on bacterial growth, and at a high concentration of 80 mg/L, there is no significant inhibitory effect on the growth of the engineered strain; the blue dashed line represents the effect of PFBA concentration on bacterial growth, and at a high concentration of 400 mg/L, there is no significant inhibitory effect on the growth of the engineered strain.
In summary, we conclude that PFAS has no significant effect on the growth of the engineered bacteria within the experimental concentrations referenced, and therefore, it is likely to tolerate higher concentrations of PFAS in future applications, therefore it is also more likely to adapt to different application environments.

## VII. Verification of Working Efficiency in the Engineered Bacteria

We picked the successful transformants and purified them by streaking on LB solid medium containing the corresponding antibiotics using an inoculation loop. We inoculated a single colony into 5 mL of liquid LB medium and cultured at 37°C, 200 rpm for 12 hours. We then took 10 μL of the bacterial culture from transformants 11, 12, and 16 of BL21-T3 and dotted them onto solid LB plates containing different concentrations of NaF (in mM), then incubate at 37°C for 48 h.

![results20](https://static.igem.wiki/teams/5838/results/results20.webp)
<center><b><i>Fig. 20. Growth of the transformants under different NaF concentrations</i></b></center>

As shown in the figure, the engineered bacteria can grow normally under different concentrations of NaF. Solutions containing different concentrations of PFBA and PFOA were added to 5 mL of LB liquid medium containing the appropriate antibiotics, inoculated with strain 12 BL21-T3 and the wild-type BL21(DE3), then incubated at 37°C, 200 rpm for 16 hours. Total protein from the engineered bacteria was extracted and subjected to SDS-PAGE electrophoresis, with approximately 15 μg of each sample loaded. The gels were stained using HiPer protein staining reagent to show the bands.

![results21](https://static.igem.wiki/teams/5838/results/results21.webp)
<center><b><i>Fig. 21. Results of total protein electrophoresis of engineered bacteria</i></b></center>

A, Lanes 1, 3, and 5 represent the total protein electrophoresis of the wild-type strain BL21(DE3) at PFBA concentrations of 0, 25, and 50 mg/L, respectively. Lanes 2, 4, and 6 represent the total protein electrophoresis of the engineered bacteria BL21-T3 at PFBA concentrations of 0, 25, and 50 mg/L, respectively. B, Lanes 1, 3, and 5 represent the total protein electrophoresis of the wild-type strain BL21(DE3) at PFBA concentrations of 100, 200, and 400 mg/L, respectively. Lanes 2, 4, and 6 represent the total protein electrophoresis of the engineered bacteria BL21-T3 at PFBA concentrations of 100, 200, and 400 mg/L, respectively. C, Lanes 1 to 6 represent the total protein electrophoresis of the wild-type strain BL21(DE3) at PFOA concentrations of 0, 5, 10, 20, 40, and 80 mg/L, respectively. D, Lanes 1 to 6 represent the total protein electrophoresis of the engineered bacteria BL21-T3 at PFOA concentrations of 0, 5, 10, 20, 40, and 80 mg/L, respectively.
In this study, the target proteins CrcB and DhaA are approximately 8 kDa and 23.5 kDa, respectively. If the P2A function was not fully effective, resulting in CrcB and mCherry, DhaA and GFP existing as fusion proteins, the protein masses would be 33 kDa and 39 kDa, respectively. According to the results shown in the figures, although there are significant differences in protein bands among the groups, there are no obvious differences in the target bands. The preliminary analysis suggests that this is due to the insufficient amount of the protein tested, which resulted in the target protein bands not being distinct. Subsequent experiments will include different loading amounts to determine their impact.
Under the same culture conditions, we collected the bacterial solution and resuspended it in PBS buffer to an OD600 of about 0.5. We then excited GFP and mCherry with light of their respective wavelengths and measured their fluorescence values. The results are shown as the follows:

![results22](https://static.igem.wiki/teams/5838/results/results22.webp)
<center><b><i>Fig. 22. Fitting curve of GFP fluorescence values of engineered bacteria under different concentrations of PFBA/PFOA</i></b></center>

As shown in the figure, under the action of PFBA, the fluorescence of BL21-T3 decreases and then increases, while that of BL21 (DE3) decreases and then stabilizes; under the action of PFOA, both their fluorescence increases and then decreases, while the peak of BL21-T3 is more significant. It is evident that the response patterns and sensitivities of the wild-type and engineered strains to different PFAS are different, and the engineered strain's response to PFBA is stronger than to PFOA. Therefore, it is likely that the engineered strain has an advantage in degrading short-chain PFAS.
Similarly, to detect whether the CrcB protein was expressed accordingly, we also measured the fluorescence intensity of the mCherry protein that was co-expressed with it. The results are shown in the following figure:

![results23](https://static.igem.wiki/teams/5838/results/results23.webp)
<center><b><i>Fig. 23. Fitting curve of mCherry fluorescence values of engineered bacteria under different concentrations of PFBA/PFOA</i></b></center>

As shown in the figures, under the action of PFBA, the fluorescence intensity of BL21-T3 first increases and then decreases (the peak under PFBA is wider, and the peak appears earlier under PFOA); while the fluorescence intensity of BL21 (DE3) remains consistently very low and stable, almost unaffected by the concentrations of the two compounds. This indicates that BL21-T3 has a more significant response to PFAS. Although the fluorescence intensity of BL21-T3 is always higher than that of the wild type, both intensities are relatively low, and the fluorescence strength is not prominent enough. Furthermore, previous experiments with exogenous F ion addition in the plate-dropping assay indicated that the CrcB protein can be expressed in the engineered bacteria. This suggests that under intracellular physiological conditions, the expression level of the CrcB protein is not high, which is likely related to the concentration of F ions inside the cell or possibly limited by the speed of DhaA in degrading PFAS.
In summary, the engineered bacterium BL21-T3 can maintain normal physiological functions and degradation capabilities in different concentrations of PFAS-contaminated environments by regulating the expression of related proteins. The experiments show that its response to PFAS exhibits a concentration-dependent regulatory pattern, suggesting that the strain possesses molecular mechanisms for environmental adaptation. In the assessment of F ion tolerance, the engineered bacteria maintained stable pollutant degradation activity within the range of 0~100 mM NaF concentrations, demonstrating strong tolerance to F ions and potential practical application in F-contaminated environments. Given the introduction of specific tags during protein design, subsequent experiments will use Western Blot technology and targeted antibodies to detect the expression changes of the target protein, further verifying the protein expression regulation mechanism of the engineered bacteria under PFAS stress. This study confirms that BL21-T3 has multiple environmental adaptability and efficient degradation capabilities, providing experimental evidence for its transformation and application in environmental pollution control.
