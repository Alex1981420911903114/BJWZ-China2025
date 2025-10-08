# Engineering

## I. Introduction

Per- and polyfluoroalkyl substances (PFAS), known as "persistent chemicals", are difficult to degrade in the environment and widely present in drinking water and soil. PFAS pose significant hazards to both human health and the ecological environment. Traditional detection relies on large-scale instruments (such as LC-MS), and degradation requires complex conditions like high temperature and high pressure, making it unsuitable for low-cost promotion. This project aims to design a simple and easy-to-operate integrated "detection-degradation" system, which realizes the visual detection and preliminary degradation of PFAS through engineered Escherichia coli (E. coli).

## II. Experimental Materials

### 1. Strains and Plasmids

The chassis strain we used is E. coli BL21 (DE3), which has high tolerance to PFAS, so there is no need to worry that excessive absorption of PFAS will reduce bacterial activity; after engineering design, it is used in the laboratory for PFAS degradation research. DH5α is used for efficient amplification of target plasmids.

***Table 1 The strains and Plasmids Used in This Study***
| Name | Functional Description | Source |
| ---- | ---------------------- | ------ |
| E.coli DH5α | Amplification of target plasmid | 2nd Lab® |
| E.coli BL21(DE3) | Chassis | 2nd Lab® |
| pET-20b(+) | Vector Plasmid | AZENTA |
| pET-28a(+) | Vector Plasmid | AZENTA |
| pSuicide | Provide ccdB gene | BNU-China |
| pCDFDuet-1-VVD | laboratory-stored | 2024 BJWZ-China |

### 2. Plasmids

This study used the following 4 plasmids: pET-20b (+), pET-21b (+), pET-28a (+) and pCDFDuet-1-VVD.
For the pET-20b (+) plasmid, we used it to express the dhaA and GFP components, and regulated their expression with a PFAS-sensitive promoter. DahA is a dehalogenase protein with the ability to degrade PFAS.
For the pCDFDuet-1 plasmid, we used it to express a commonly used suicide gene ccdB, and regulated its expression with an arabinose operon.
At the same time, for the pET-28a (+) plasmid, we used it to express the crcB gene, whose expression product CrcB has the ability to transport fluoride ions out of the cell.
In addition, pET-21b (+) was used to express another suicide system MazE/F.

### 3. Experimental Reagents and Media

We used LB medium and added antibiotics and expression inducers as needed. The complete list is as follows:

***Table 2 Experimental Reagents***
| Reagent name | Manufacturer |
| ------------ | ------------ |
| Restriction endonuclease | TaKaRa |
| T4 DNA Ligase | TaKaRa |
| In-Fusion HD Cloning kit | TaKaRa |
| Ex-Taq DNA polymerase | TaKaRa |
| dNTP | TaKaRa |
| DNA Marker | TaKaRa |
| PCR Mix | TIANGEN |
| Plasmid extraction kit | Magen |
| PCR product recovery kit | Magen |
| GeneJET agarose gel recovery kit | Magen |
| Ampicillin, sodium salt | Sangon Biotech |
| Kanamycin sulfate | Sangon Biotech |
| 50×TAE | Sangon Biotech |
| NaF | Sangon Biotech |
| PFBA(Chemical Standard) | PSAITONG |
| PFOA(Chemical Standard) | PSAITONG |
| LB Broth | BeSebio |
| LB Agar | BeSebio |
| L-(+)-Arabinose | PSAITONG |

- **Preparation of Culture Media**: 
LB medium: Weigh 40g of LB agar or 20g of LB broth powder, stir with 800 mL of distilled water to dissolve the medium, dilute the medium to 1 L, and sterilize at 121°C for 20 minutes.

- **Antibiotics**:
Ampicillin: The storage concentration is 50 mg/mL, the working concentration is 100 μg/mL, and the storage temperature is -20°C.
Kanamycin sulfate: The storage concentration is 100 mg/mL, the working concentration is 50 μg/mL, and the storage temperature is -20°C.
Streptomycin: The storage concentration is 50 mg/mL, the working concentration is 100 μg/mL, and the storage temperature is -20°C.

## III. Experimental Methods

### 1. Culture and Preservation of E. coli

Divide the sterilized 50% glycerol into 2mL cryopreservation tubes on a ultra-clean workbench, 0.8 mL per tube, loosen the cap for sterilization again, and then refrigerate at 4°C for later use. Inoculate the target strain into 5 mL of LB liquid medium containing the corresponding antibiotics, and culture overnight at 37°C and 200 rpm. Centrifuge at 5000 rpm for 5 minutes, discard the supernatant, then add 1 mL of fresh antibiotic-free LB liquid medium to resuspend the bacteria. Repeat the above steps. Resuspend the bacterial cells with 0.8mL of fresh LB medium without any antibiotics, add all the bacterial solution into the cryopreservation tube, invert and mix, mark the strain name, resistance, production time and producer, and freeze in a -80°C refrigerator.
Prepare the medium with corresponding antibiotics, dry the condensed water on the surface of the medium to prevent the water droplets from forming bacterial lawns after inoculation. Pick a small amount of bacterial clumps with a sterilized inoculating loop by burning, and then streak on the plate for activation. After the bacterial colonies grow, pick a single colony and inoculate it into LB medium containing the corresponding antibiotics, and culture overnight at 200 rpm and 37°C.

### 2. Transformation of E. coli

Purchase E. coli competent cells from 2nd Lab®, 100 μL per tube. The specific transformation steps are as follows:
Take the competent cells out of the -80°C refrigerator, place them on ice to dissolve, then add 10~20 ng of the target plasmid or 2.5~5 μL of the ligation product into the competent cells, flick the tip of the finger tube to mix evenly, then quickly insert it into ice and incubate for 20~30 minutes; after ice incubation, wipe the water droplets at the bottom of the tube with a paper towel, place the finger tube in a metal bath, heat shock at 42°C for 90 seconds, then quickly place it on ice and let it stand for 2 minutes. Add 900 μL of fresh LB liquid medium preheated at 37°C to the finger tube, and recover at 37°C and 160 rpm for 1 hour. After recovery, centrifuge at 5000 rpm for 5 minutes, discard the supernatant, resuspend the bacterial cells with 500 μL of fresh medium, take 100 μL and spread it on the LB plate containing the corresponding antibiotics, and incubate overnight at 37°C.

### 3. Colony PCR

After the transformants in Step 2 are cultured overnight until the colony diameter is 0.5 mm, colony PCR can be performed.
Prepare PCR tubes, primers, another LB plate with corresponding resistance, ddH2O, pipette tips and 2×PCR Mix, etc.; after ultraviolet sterilization of the ultra-clean workbench for 20 minutes, scrape a small amount of single colonies with a white pipette tip, stir gently in the PCR system for 5~10 times, then gently touch the tip to the new LB plate, make corresponding marks, seal with a parafilm, invert the plate, and culture under appropriate conditions.
Agarose gel electrophoresis was used to detect the PCR product. After confirming the correct transformant, linear purification was performed; the purified transformant was inoculated into 5 mL of LB medium containing appropriate antibiotics, cultured overnight at 37°C and the plasmid was extracted, quantified by agarose gel electrophoresis, and then verified by enzyme digestion. For the correctly verified transformants, expand the culture and make glycerol tubes for preservation.

### 4. Restriction Digestion, Ligation, and PCR Systems

Enzyme digestion reaction was used to verify whether the target plasmid was ligated correctly, usually single or double enzyme digestion was used; the enzyme digestion template should be determined according to the size of the target band, generally 200～300 ng of the target plasmid was digested in a 10 μL system.

***Table 3 Restriction Digestion Reaction System***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Enzyme A | 2 μL |
| Enzyme B | 2 μL |
| 10× Enzyme Cutting Buffer | 1 μL |
| Template | 200 ng |
| RNase-free ddH2O | Add up to 10 μL |

The target fragment was ligated with the enzyme-digested vector. The product after In-Fusion ligation reaction was transformed into E. coli. The 10 μL ligation system is as follows:

***Table 4 Ligation System for Gene Fragment and Vector Plasmid***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Linearized plasmids recycling products | A μL (200 ng) |
| Template | B μL (100 ng) |
| 5×In-Fusion HD | 2 μL |
| ddH2O | Add up to 10 μL |

Flick the bottom of the PCR tube to mix the mixture, centrifuge briefly, and place it in a metal bath at 50°C for 15 minutes. At the end of the reaction, take 5 μL of the ligation product for E. coli transformation.
The amount of template for conventional PCR is 10 ng~100 ng, and the system is 20 mL; in the case of colony PCR, the enzyme, buffer and dNTP in the system are all included in the 2×PCR Mix.

***Table 5 Common PCR Reaction System***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| 10×Ex-taq buffer | 2 μL |
| dNTP | 2 μL |
| Primer-F/R | 1/1 μL |
| Template | 1 μL |
| Enzyme | 0.2 μL |
| RNase-free ddH2O | Add up to 20 μL |

The temperature and time of the PCR program are determined according to the enzyme used, the length of the PCR and the annealing temperature of the primers.

***Table 6 PCR Reaction Steps***
![Table6](https://static.igem.wiki/teams/5838/project/pcr-steps.webp)

## IV. Experimental Procedure

### 1. Sequence Synthesis and Construction of Expression Plasmids

1. Construction of Suicide Plasmid
The arabinose promoter in E. coli requires three genes: araB, araA and araD, which form a gene cluster, referred to as araBAD; the arabinose promoter, ribosome binding site, araBAD and ccdB are fused into a fragment, namely: the expression of ccdB. In addition, when arabinose is added, araC protein needs to be synthesized to regulate the transcription of araBAD.
The synthesized fragment is araC, in which the Xba I restriction site is retained at the 5' end and the Sac I restriction site is retained at the 3' end. Insert the fragment into the vector plasmid pCDFDuet-1 to obtain a recombinant plasmid. In ccdB, the Xba I restriction site is retained at the 5' end and the Xho I restriction site is retained at the 3' end. Insert the fragment into the recombinant plasmid to obtain the recombinant plasmid pCDFDuet-1-ccdB, which can be used to express ccdB in BL21 (DE3).

2. Construction of crcB Expression Vector
    - Synthesize T7pro+F Riboswitch+RBS+CrcB+His+P2A, insert it into the vector pET-28a (+) at the EcoR I and Sal I sites, and retain the restriction sites at both ends to obtain the plasmid pET-28a-CrcB;
    - Synthesize mCherry, insert it into the vector pET-28a-CrcB from the Sal I and Xho I sites, and retain the restriction sites at both ends to obtain the plasmid pET-28a-CrcB+mCherry (abbreviated as: pET-28a-CrcB)
The obtained recombinant plasmid has a fluoride ion riboswitch upstream of the gene, and the transcribed mRNA will form a hairpin structure to block the translation process. When fluoride ions exist in the environment, the fluoride ions combine with this structure, open the hairpin structure, activate the expression of the fluoride ion transporter CrcB, and realize the function of transporting fluoride ions to the outside of the cell, thereby reducing the concentration of fluoride ions in the cell and ensuring the normal survival of bacteria.

3. Construction of dhaA Expression Vector

    - Synthesize prmA+RBS, insert it into the vector pET-20b (+) at the Bgl II and EcoR I sites, and retain the restriction sites at both ends to obtain the plasmid pET-20b-prmA;
    - Synthesize dhaA+linker+His+P2A, insert it into pET-20b-prmA from EcoR I and Sac I sites, and retain the restriction sites at both ends to obtain plasmid pET-20b-prmA+dhaA;
    - Synthesize superfolder GFP, insert it into pET-20b-prmA+dhaA from Sac I and Sal I sites, and retain the restriction sites at both ends to obtain plasmid pET-20b-prmA+dhaA+sfGFP (abbreviated as: pET-20b-dhaA);
The PFAS-sensitive promoter prmA is used to start the expression of downstream genes. When the concentration of PFAS in the environment is high, the prmA promoter region is activated to start the expression of PFAS dehalogenase DhaA. When there is a lack of PFAS in the environment, the downstream genes are not expressed.

### 2. Obtainment of Target Strains

Through E. coli transformation, colony PCR and enzyme digestion verification, we obtained the target strain BL21-T3 transformed with pCDFDuet-1-ccdB, pET-28a-CrcB and pET-20b-dhaA.

### 3. Exploration of the Optimal Concentration of Arabinose-Induced ccdB Expression

Inoculate a single colony of BL21-T3 strain into 5 mL of LB medium, inoculate streptomycin, kanamycin and ampicillin, culture overnight, then transfer to a new 20 mL medium and culture until OD600 = 0.4.
Prepare 28 15mL finger tubes containing 5 mL of LB liquid medium from the same batch, add the arabinose mother liquor filtered to remove bacteria, so that the final concentrations (mass-volume ratio: m/v) are 0, 0.1%, 0.2%, 0.3%, 0.4%, 0.5%, 0.6% respectively.
Then inoculate 1% of the initial bacterial solution of the medium volume with OD600=0.4 into the medium, and culture at 37°C and 200 rpm for 12 hours. The next day, take 3 mL of bacterial solution and place it in a quartz cup, measure the OD600 with a spectrophotometer, confirm that adding arabinose can induce the strain to commit suicide, and obtain the optimal induction concentration of arabinose.

### 4. Exploration of the Optimal Timing and Concentration of Fluoride Ion-Induced crcB Expression

Inoculate a single colony of strain BL21-T3 into 5 mL of LB medium, inoculate ampicillin and kanamycin, culture overnight, then transfer to a new 20 mL medium and culture until OD600 = 0.4.
Add filter-sterilized NaF solution to 24 petri dishes containing LB solid medium and spread 50 μL of bacterial solution to make the final fluoride ion concentrations 0, 2, 4, 6, 8, 10, 12, 14 mmol/L respectively, and culture at 37°C and 200 rpm for 8 hours. Observe the colony color on the medium, take photos, make a comparison chart, and use a microplate reader to measure the fluorescence intensity to find the optimal induction time and concentration.

### 5. Exploration of the Effects of Different PFAS on the Growth of Engineered Bacteria

Inoculate a single colony of strain BL21-T3 into 5 mL of liquid LB medium containing three resistances (ampicillin, streptomycin, and kanamycin) for expansion culture, then transfer it to a new test tube for cultivation to determine the effects of different PFAS on the growth of engineered bacteria. The final concentrations of PFBA are 0, 25, 50, 100, 200, and 400 mg/L respectively; the final concentrations of PFOA are 0, 5, 10, 20, 40, and 80 mg/L respectively. Each group has 3 replicates, and the culture conditions are 37°C, 200 rpm, and 16 hours.
Take 3 mL of bacterial solution and place it in a quartz cup, measure the OD600 with a spectrophotometer to confirm whether PFAS at various concentrations within the experimental research range has an impact on the growth of strain BL21-T3.

### 6. Total Protein Extraction of Strain BL21-T3 and Fluorescence Intensity Detection with Microplate Reader

Prepare BL21-T3 and BL21 (DE3) bacterial solutions containing different concentrations of PFBA and PFOA respectively according to the previous step. Take 1.5 mL of bacterial solution, centrifuge at 12,000 rpm and 4°C for 2 minutes, and discard the supernatant. Resuspend with 0.3 mL of bacterial extraction reagent added with 1 mM phenylmethylsulfonyl fluoride (PMSF), and incubate at room temperature for 15 minutes. Centrifuge the resuspended bacterial lysate at 12,000 rpm and 4°C for 5 minutes, carefully aspirate the supernatant to obtain soluble protein. Perform SDS-PAGE electrophoresis on the extracted protein. After completion, use M5 Hiper Supermicroscale Protein Stain to stain the gel to make the protein bands visible.
At the same time, take 1.5 mL of each of the above bacterial solutions without protein extraction, centrifuge at 6,000 rpm and 4°C for 5 minutes, and discard the supernatant. Resuspend the precipitate with 1 mL of PBS (pH 7.4), and repeat centrifugation and washing twice to remove fluorescent impurities in the medium. Spot the resuspended bacterial solution into a 96-well plate, resuspend the bacterial solution with PBS to make its OD600 = 0.5, and place it in a microplate reader. First, set the excitation wavelength to 488 nm and the emission wavelength to 508 nm to detect the GFP fluorescence intensity. Second, set the excitation wavelength to 570 nm and the emission wavelength to 620 nm to detect the mCherry fluorescence intensity.

## V. Experimental Results

Detailed results and analysis are shown in the experimental results section.

## VI. Conclusion
We successfully constructed the BL21-T3 engineered strain, and its 3 components can complete their respective preset functions. The PFAS-sensing promoter starts the expression of the dehalogenase gene (dhaA) to realize the intracellular defluorination of PFAS, and the GFP intensity can reflect the PFAS degradation in real time. The ion transporter CrcB controlled by the fluoride ion riboswitch is responsible for transporting fluoride ions to the outside of the cell and precipitating with calcium ions. These two systems work together organically to realize the simple integrated detection-degradation requirement of PFAS. In addition, the suicide plasmid system we used to ensure biosafety also played a good role, realizing the controllability of the experiment and meeting the requirements of iGEM.

## VII. Next Plan

### 1. Optimization Experiment of Environmental Factors on PFAS Degradation Efficiency
Explore the effects of temperature and pH value on the PFAS degradation efficiency of engineered bacteria, and determine the optimal degradation conditions. By setting different temperature and pH groups, the degradation efficiency was measured, and the PFAS degradation was indirectly reflected by the attenuation of GFP fluorescence intensity (decreased fluorescence indicates PFAS consumption); more accurate measurement was performed by detecting the residual concentration of PFBA using HPLC (borrowing university laboratory instruments). Compare the degradation rates under different conditions and draw a time-degradation rate curve.

### 2. Application of Engineered Bacteria in PFAS Removal from Simulated Polluted Water Bodies
Verify the PFAS degradation ability of BL21-T3 engineered bacteria in actual water environments to provide a prototype scheme for water body restoration. It is planned to collect actual water samples such as campus pond water and river water, sterilize them with a 0.22 μm filter membrane for later use, inoculate BL21-T3 bacterial solution into 100 mL of water samples, and calculate the degradation rate ((initial concentration - residual concentration)/initial concentration × 100%). Evaluate the practicality of engineered bacteria in complex water quality to provide data support for subsequent environmental restoration pilot tests.

### 3. Preparation and Application of Magnetic Nanocarrier-Immobilized Engineered Bacteria
Immobilize BL21-T3 through magnetic nanoparticles to solve the problem that free bacteria are easy to lose in the environment and realize reuse. Develop recyclable bioremediation agents to reduce the cost of large-scale water treatment and conform to the concept of green chemistry.

## VIII. Discussion
The Significance of Successfully Constructing Engineered E. coli for PFAS Treatment Nowadays, PFAS pollution is a very serious environmental problem, which poses great hazards to human health and the ecological environment, and there is no very effective solution yet. The construction of engineered bacteria provides a new idea for the detection and degradation of PFAS. It innovatively integrates the PFAS detection and degradation systems into one, so that the engineered bacteria can complete the treatment of PFAS by themselves without additional regulation steps. Due to the powerful suicide system and fully controllable mechanism to regulate the expression of target proteins, these modified bacteria are safe enough and will not spread into the environment. We look forward to contributing to the treatment of PFAS, reducing health and environmental problems caused by PFAS pollution, promoting the construction of ecological civilization, and building a healthy life together.