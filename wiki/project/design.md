# Design
---
## I. Introduction
Per- and polyfluoroalkyl substances (PFAS), known as "forever chemicals" due to their persistence, are difficult to degrade in the environment and are widely found in drinking water and soil. PFAS poses significant hazards to human health and the ecological environment. Traditional detection relies on large instruments (such as LC-MS), and degradation requires complex conditions like high temperature and high pressure, making it unsuitable for low-cost widespread adoption. This project aims to design a simple and easy-to-operate integrated "detection-degradation" system to achieve visual detection and preliminary degradation of PFAS through engineered E. coli.

## II. Experimental Materials
1. Strains and Plasmids
The chassis strain we used is E. coli strain C43(DE3), which is used in the laboratory to decompose PFAS, so it has high tolerance to PFAS. There is no need to worry about reduced bacterial activity due to excessive PFAS uptake. DH5α was used for efficient amplification of target plasmids.

*Table 1: Strains and plasmids used in this study*
| Name | Functional Description | Source |
| ---- | ---------------------- | ------ |
| E. coli DH5α | Amplification of target plasmid | 2nd Lab® |
| E. coli BL21(DE3) | Chassis | 2nd Lab® |
| pET-20b(+) | Vector Plasmid | AZENTA |
| pET-28a(+) | Vector Plasmid | AZENTA |
| pSuicide | Provide ccdB gene | BNU-China |
| pACYC184 | Vector Plasmid | AZENTA |

2. Plasmids
This study used the following 3 plasmids: pET-21b(+), pET-28a(+), and pACYC184.
For the pET-21b(+) plasmid, we inserted the dhaA and GFP genes, with their expression regulated by PFAS. dhaA is a dehalogenase protein capable of decomposing PFAS. We hope to achieve active and efficient decomposition of PFAS by artificially regulating the expression of this protein in E. coli. For the pET-28a(+) plasmid, we inserted a commonly used suicide gene, ccdB, with its expression regulated by arabinose, to artificially control bacterial suicide, ensuring no possibility of environmental leakage. Also for the pET-21b(+) plasmid, we inserted the crcB gene, with its expression regulated by fluoride ions. crcB is a transmembrane protein capable of transporting fluoride ions out of the cell. We hope to achieve active and efficient transport of fluoride ions by artificially regulating the expression of this protein in E. coli.

3. Experimental Reagents and Media
We used LB medium and added antibiotics and expression inducers as needed. The complete list is as follows:

*Table 2: Experimental Reagents*
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
| LB Broth | BeSebio |
| LB Agar | BeSebio |
| L-(+)-Arabinose | SAITONG |

Media Preparation:
LB medium: Weigh 40g LB agar or 20g LB broth powder, stir with 800mL distilled water, dissolve the medium, bring the volume to 1 L, and sterilize at 121°C for 20 minutes.
Antibiotics: Ampicillin stock concentration 50 mg/mL, working concentration 100 μg/mL, storage temperature -20°C. Sulfate kanamycin solution with a concentration of 100 mg/mL, working concentration 50 μg/mL, and tetracycline solution stored at -20°C.

## III. Experimental Methods

1. Culture and Preservation of E. coli: 
Sterilized 50% glycerol was divided into 2mL cryogenic storage tubes, 1mL per tube, under a super-clean bench. Lids were loosened and sterilized again, then refrigerated at 4°C for later use. The target strain was inoculated into 5 mL of LB liquid medium containing the corresponding antibiotic at 200 rpm, cultured overnight at 37°C, centrifuged at 5000 rpm for 5 min, the supernatant was discarded, and then 1 mL of fresh antibiotic-free LB medium was added to resuspend the bacteria at 5000 rpm. After centrifugation for 5min, the bacteria were washed and the supernatant discarded. Then 1mL of fresh LB medium was added to resuspend the bacteria. The entire suspension was added to the cryogenic storage tube, mixed by inversion, labeled with strain name, resistance, production date, and producer, and frozen in a -80°C freezer. Prepared corresponding antibiotic LB solid plates, dried the water condensation on the plate surface to prevent bacterial lawn formation from water flow during inoculation. A small amount of bacterial solution was obtained from the glycerol tube with a sterilized inoculation loop and streaked onto the plate for activation. After bacterial colonies grew, a single colony was selected and transferred to LB medium containing the corresponding antibiotic, cultured overnight at 37°C with shaking at 200 rpm.

2. Transformation of E. coli: 
E. coli competent cells were purchased from 2nd Lab®, 100 μL per tube. Specific transformation steps are as follows:Take competent cells from the -80°C freezer, place on ice to thaw. Add an appropriate amount of target DNA fragment to the competent cells, gently flick the tip of the tube to mix evenly, incubate on ice for 20-30 minutes;After ice incubation, heat shock the mixture at 42°C for 90 s, then quickly place it on ice and let stand for 2 min. Add 900 μL of fresh LB liquid medium pre-warmed to 37°C to the mixture, and recover at 37°C and 160 rpm for 1 hour;After recovery, centrifuge at 5000rpm for 5 minutes, discard the supernatant, resuspend the pellet in 500μL of fresh medium, spread 100μL of the bacterial solution on an LB plate containing the corresponding antibiotic, and incubate overnight at 37°C.

3. Colony PCR: 
After the transformants from step 3.2 are cultured overnight until the colony diameter is 0.5mm, colony PCR can be performed;
Prepare PCR tubes, primers, a new plate, pipette tips, PCR mix, etc., and set up an appropriate system on the laboratory bench;
In the super-clean workbench, scrape a small amount of a single colony with a white pipette tip, stir gently 5~10 times in the PCR system, then place the tip on a prepared plate containing the same antibiotic, mark accordingly, and culture under appropriate conditions;
Determine the correct transformants based on PCR product agarose gel electrophoresis results, then perform line purification;
Inoculate the purified transformants into 5mL of LB medium, incubate overnight with the appropriate antibiotic, extract plasmids, quantify via agarose gel electrophoresis, then perform enzymatic digestion for verification;
Scale up the culture of correctly verified transformants and preserve them in glycerol tubes.

4. Enzymatic Digestion, Ligation, and PCR Systems: 
Digestion reactions were used to verify whether the target plasmids were correctly ligated, usually single or double digestion; the digestion template amount is determined based on the target band size, generally 200-300 ng for a 10μL system.

*Table 3: Enzyme Digestion Reaction System*
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Enzyme A | 2 μL |
| Enzyme B | 2 μL |
| 10× Enzyme Cutting Buffer | 1 μL |
| Template | 200 ng |
| RNase-free ddH2O | Add up to 10 μL |

The target fragment was ligated with the digested vector. The product from the In-Fusion ligation reaction was transformed into E. coli. The ligation system was 10 μL as follows:

*Table 4: Ligation System of Gene Fragments and Vector Plasmids*
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Linearized plasmid AGE products | A μL (200 ng) |
| Template | B μL (100 ng) |
| 5×In-Fusion HD | 2 μL |
| Aseptic ddH2O | Add up to 10 μL |

Mix the mixture in a PCR tube, centrifuge briefly, then place in a PCR instrument at 50°C for 15 minutes. At the end of the reaction, take 5 μL of the product for E. coli transformation.
The standard amount of template for regular PCR is 100 ng, system volume 20 μL; for colony PCR, the enzyme, buffer, and dNTP in the system are all included in the PCR mix.

*Table 5: Common PCR Reaction System*
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| 10×Ex-taq buffer | 2 μL
| dNTP | 2 μL |
| Primer-F/R | 1/1 μL |
| Template | 1 μL |
| Enzyme | 0.2 μL |
| RNase-free ddH2O | Add up to 20 μL |

PCR program temperatures and times are determined based on the enzyme used, PCR product length, and primer annealing temperatures.

*Table 6: Reaction Procedures of PCR*


## IV. Experimental Procedure
Expression Plasmid Sequence Synthesis and Construction:Degradation of arabinose in E. coli requires three genes: araB, araA, and araD, which form a gene cluster abbreviated as araBAD; The arabinose promoter, ribosome binding site, araBAD, and ccdB were fused into one fragment for ccdB expression. Additionally, the araC gene needs to be synthesized to regulate araBAD transcription when arabinose is added.
The synthesized fragment for expression was araC, with an Xba I restriction site retained at the 5' end and a Sac I restriction site at the 3' end. The fragment was inserted into the vector plasmid pET-21b to obtain a recombinant plasmid. For ccdB expression, an Xba I restriction site was retained at the 5' end and an Xho I restriction site at the 3' end. The fragment was inserted into the recombinant plasmid to obtain the recombinant plasmid pET-21b-BADpromoter-ccdB, which can be used to express ccdB in DE3.

1. crcB expression: The mRNA transcribed from this gene forms a hairpin structure that blocks translation. When fluoride ions are present in the environment, they bind to this structure, activating the translation of the fluoride ion transporter protein crcB, thereby reducing the intracellular fluoride ion concentration and ensuring normal bacterial survival.
The synthesized fragment for expression was crcB, with an Xba I restriction site retained at the 5' end and an Xho I restriction site at the 3' end. The fragment was inserted into the vector plasmid pET-28a to obtain a recombinant plasmid. (Note: Text seems slightly repetitive here regarding ccdB, but context suggests it's about crcB). The fragment was inserted into the recombinant plasmid to obtain the recombinant plasmid pET-28a-crcB, which can be used to express crcB in DE3.

2. dhaA expression: A plasmid where an operon regulates the expression of the prmA gene. When the environmental PFAS concentration is high, PFAS leads to reduced catalase efficacy by targeting PPAR-α and other peroxisome proteins. This causes H₂O₂ to accumulate in the cell, thereby activating the FIS transcriptional regulator or cAMP receptor protein, which upregulates the prmA promoter region, initiating the expression of the PFAS enzyme dhaA. When PFAS is lacking in the environment, downstream genes are not expressed.

3. Obtaining Target Strain: Through E. coli transformation, colony PCR, and enzymatic digestion verification, we obtained the target strain DE3 + ccdB + crcB + dhaA.

4. Exploring the Optimal Concentration of Arabinose for Inducing ccdB Expression: A single colony of the DE3+ccdB+crcB+dhaA strain was inoculated in 5 mL LB medium with streptomycin, cultured overnight, then transferred to fresh 20 mL medium and cultured to OD600 = 0.4.28 x 15mL tubes containing 5mL LB liquid medium were prepared from the same batch. Filter-sterilized arabinose stock solution was added to achieve final concentrations (mass/volume ratio: m/v) of 0, 0.1%, 0.2%, 0.3%, 0.4%, 0.5%, 0.6% respectively.Then the initial culture at OD600=0.4 was inoculated at 1% of the medium volume and cultured at 37°C, 200 rpm for 12h. The next day, 3mL of culture was taken to measure OD600, confirming that adding arabinose can induce strain suicide and obtaining the optimal inducing concentration of arabinose.

5. Exploring the Optimal Time and Concentration for Fluoride Ion Induction of crcB ExpressionA single colony of the strain DE3+ccdB+crcB+dhaA was inoculated in 5 mL LB medium with ampicillin and kanamycin, cultured overnight, then transferred to fresh 20 mL medium and cultured to OD600 = 0.4.24 petri dishes containing LB solid medium were supplemented with filter-sterilized NaF solution, and 50 microliters of bacterial culture were spread, achieving final fluoride ion concentrations of 0, 2, 4, 6, 8, 10, 12, 14 mmol/L respectively, and cultured at 37°C (Note: "200 rpm" is atypical for solid media, likely refers to shaking liquid culture step beforehand or is a mistake). Coated on medium with appropriate antibiotics for 8h.Observe the colony color on the medium, take photos, make comparison charts to find the optimal induction time and concentration.
