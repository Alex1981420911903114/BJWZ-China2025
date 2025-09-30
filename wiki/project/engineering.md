# Engineering

## I. Introduction

Per- and polyfluoroalkyl substances (PFAS), due to their "forever chemical" properties, are difficult to degrade in the environment and are widely found in drinking water and soil. PFAS pose significant hazards to human health and the ecological environment. Traditional detection relies on large instruments (e.g., LC-MS), and degradation requires complex conditions such as high temperature and high pressure, which are unsuitable for low-cost widespread adoption. This project aims to design a **simple and easy-to-operate integrated "detection-degradation" system**, utilizing engineered *E. coli* to achieve visual detection and preliminary degradation of PFAS.

## II. Experimental Materials

### 1. Strains and Plasmids

The chassis strain used is *E. coli* strain C43 (DE3), utilized in the laboratory for decomposing PFAS, thus it has high tolerance to PFAS. There is no need to worry about excessive PFAS uptake causing reduced bacterial activity. DH5α is used for efficient amplification of target plasmids.

***Table 1: Strains and Plasmids Used in This Study***
| Name | Functional Description | Source |
| ---- | ---------------------- | ------ |
| E. coli DH5α | Amplification of target plasmid | 2nd Lab® |
| E. coli BL21(DE3) | Chassis | 2nd Lab® |
| pET-20b(+) | Vector Plasmid | AZENTA |
| pET-28a(+) | Vector Plasmid | AZENTA |
| pSuicide | Provide ccdB gene | BNU-China |
| pACYC184 | Vector Plasmid | AZENTA |

### 2. Plasmids

This study utilized the following three plasmids: pET-21b(+), pET-28a(+), and pACYC184.

For the pET-21b(+) plasmid, we inserted the *dhaA* and *GFP* genes, with their expression regulated by PFAS. *dhaA* is a dehalogenase protein capable of decomposing PFAS. We aim to achieve active and efficient decomposition of PFAS by artificially regulating the expression of this protein in *E. coli*. For the pET-28a(+) plasmid, we inserted a commonly used suicide gene, *ccdB*, with its expression regulated by arabinose, allowing artificial control of bacterial suicide to ensure no potential for environmental release. Additionally, into the pET-21b(+) plasmid, we also inserted the *CrcB* gene, with its expression regulated by fluoride ions. CrcB is a transmembrane protein capable of transporting fluoride ions out of the cell. We aim to achieve active and efficient transport of fluoride ions by artificially regulating the expression of this protein in *E. coli*.

### 3. Experimental Reagents and Media

We used LB medium, supplemented with antibiotics and expression inducers as needed. The complete list is as follows:

***Table 2: Experimental Reagents***
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

- **Media Preparation**: 
LB medium: Weigh 40g LB agar or 20g LB broth powder, stir with 800mL distilled water to dissolve the medium, bring the volume to 1L, and sterilize at 121°C for 20 minutes.

- **Antibiotics**:
Ampicillin stock concentration: 50 mg/mL, working concentration: 100 µg/mL, storage temperature: -20°C.
Kanamycin sulfate stock concentration: 100 mg/mL, working concentration: 50 µg/mL, storage temperature: -20°C.
Streptomycin stock concentration: 50 mg/mL, working concentration: 100 µg/mL, storage temperature: -20°C.

## III. Experimental Methods

### 1. Culture and Preservation of *E. coli*

After sterilization, 50% glycerol was aliquoted under a laminar flow hood into 2mL cryotubes, 1mL per tube. The lids were loosened and sterilized again, then stored at 4°C for later use. The target strain was inoculated into 5 mL of LB liquid medium containing the corresponding antibiotic and cultured overnight at 37°C, 200 rpm. The culture was centrifuged at 5000 rpm for 5 min, the supernatant was discarded, and the pellet was resuspended in 1 mL of fresh antibiotic-free LB liquid medium. This step was repeated once. The entire bacterial suspension was added to the cryotube, mixed by inversion, and labeled with the strain name, resistance, date, and producer, then frozen in a -80°C freezer. Prepare medium with the corresponding antibiotic, allowing the surface condensation to dry to prevent bacterial swarming during inoculation. Using a sterilized inoculation loop, obtain a small amount of bacterial culture from the glycerol stock and streak it onto an LB agar plate containing the corresponding antibiotic to complete bacterial inoculation. After bacterial colonies grow, select a single colony, transfer it to LB liquid medium containing the corresponding antibiotic, and culture overnight at 37°C, 200 rpm.

### 2. Transformation of *E. coli*

Competent *E. coli* cells were purchased from 2nd Lab®, 100 µL per tube. The specific transformation steps are as follows:

Remove the competent cells from the -80°C freezer and place them on ice to thaw. Add an appropriate amount of the target DNA fragment to the competent cells, gently flick the tube tip to mix, and incubate on ice for 20-30 minutes.

After incubation on ice, subject the mixture to a 42°C heat shock for 90 seconds, then quickly place it on ice and let it stand for 2 minutes. Add 900 µL of pre-warmed (37°C) fresh LB liquid medium to the mixture and recover at 37°C and 160 rpm for 1 hour. After recovery, centrifuge at 5000 rpm for 5 minutes, discard the supernatant, resuspend the pellet in 500 µL of fresh medium, spread 100 µL of the bacterial suspension onto an LB agar plate containing the corresponding antibiotic, and incubate overnight at 37°C.

### 3. Colony PCR

After the transformants inoculated in step 2 are cultured overnight until the colony diameter reaches 0.5mm, colony PCR can be performed.

Prepare PCR tubes, primers, another fresh LB medium, primers, pipette tips, PCR Mix, etc., and set up appropriate instruments on the laboratory bench. Under the laminar flow hood, scrape a small amount of a single colony using a white pipette tip, gently stir it 5-10 times in the PCR mixture, then streak the colony from the tip onto the prepared medium containing the same antibiotic, mark it, and culture under appropriate conditions.

Identify the correct transformants based on the results of PCR product agarose gel electrophoresis, then streak them on medium for purification.

Inoculate the purified transformants into 5 mL of LB medium, incubate overnight with the appropriate antibiotic, and extract the plasmid. Quantify via agarose gel electrophoresis, then perform restriction digestion for verification.

Amplify the verified correct transformants and store them in glycerol stocks.

### 4. Restriction Digestion, Ligation, and PCR Systems

Verify whether the target plasmid is correctly ligated using restriction digestion reactions, typically single or double digestion. The amount of template for digestion should be determined based on the size of the target fragment, generally 200-300 ng for a 10µL system.

***Table 3: Restriction Digestion Reaction System***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Enzyme A | 2 μL |
| Enzyme B | 2 μL |
| 10× Enzyme Cutting Buffer | 1 μL |
| Template | 200 ng |
| RNase-free ddH2O | Add up to 10 μL |

Ligate the target fragment with the digested vector. Transform the product of the In-Fusion ligation reaction into *E. coli*. The ligation system for a 10 µL volume is as follows:

***Table 4: Ligation System for Gene Fragment and Vector Plasmid***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| Linearized plasmid AGE products | A μL (200 ng) |
| Template | B μL (100 ng) |
| 5×In-Fusion HD | 2 μL |
| Aseptic ddH2O | Add up to 10 μL |

Mix the mixture in a PCR tube, centrifuge briefly, then incubate at 50°C in a PCR machine for 15 minutes. At the end of the reaction, take 5 µL of the product for *E. coli* transformation.

The amount of template for conventional PCR is 100 ng, in a 20 µL system. For colony PCR, the enzyme, buffer, and dNTPs in the system are all included in the PCR mix.

***Table 5: Common PCR Reaction System***
| Reagent Name | Reagent Dosage |
| ------------- | -------------- |
| 10×Ex-taq buffer | 2 μL
| dNTP | 2 μL |
| Primer-F/R | 1/1 μL |
| Template | 1 μL |
| Enzyme | 0.2 μL |
| RNase-free ddH2O | Add up to 20 μL |

The temperature and time of the PCR program are determined based on the enzyme used, the length of the PCR product, and the primer annealing temperatures.

***Table 6: PCR Reaction Steps***
![Table6](/assets/image/project/PCR-steps.png)

## IV. Experimental Procedure

### 1. Synthesis and Construction of Expression Plasmid Sequences

The arabinose promoter in *E. coli* requires three genes: *araB*, *araA*, and *araD*, which form a gene cluster, abbreviated as *araBAD*. The arabinose promoter, ribosome binding site, *araBAD*, and *ccdB* were fused into one fragment, enabling the expression of *ccdB*. Furthermore, the AraC protein needs to be synthesized to regulate the transcription of *araBAD* when arabinose is added.

The synthesized fragment is *araC*, with an Xba I restriction site retained at the 5' end and a Sac I restriction site retained at the 3' end. The fragment was inserted into the vector plasmid pET-21b to obtain the recombinant plasmid. For *ccdB*, an Xba I restriction site was retained at the 5' end and an Xho I restriction site at the 3' end. The fragment was inserted into the recombinant plasmid to obtain the recombinant plasmid pET-21b-BADpromoter-ccdB, which can be used for the expression of *ccdB* in DE3.

- **Expression of crcB**: 
The mRNA transcribed from this gene forms a hairpin structure that blocks the translation process. When fluoride ions are present in the environment, they bind to this structure, opening it up and activating the translation of the fluoride ion transporter protein CrcB, thereby reducing the intracellular fluoride ion concentration and ensuring normal bacterial survival.
The synthesized fragment for expression is *crcB*, with an Xba I restriction site retained at the 5' end and an Xho I restriction site retained at the 3' end. The fragment was inserted into the vector plasmid pET-28a to obtain the recombinant plasmid. (Note: The text seems inconsistent here, mentioning *ccdB* again, but context suggests it should be *crcB* insertion into pET-28a). The fragment was inserted into the recombinant plasmid to obtain the recombinant plasmid pET-28a-crcB, which can be used for the expression of *crcB* in DE3.

- **Expression of dhaA**: 
A plasmid regulated by an operon controlling the expression of the *prmA* gene. When the environmental PFAS concentration is high, it activates the *prmA* promoter region, initiating the expression of the PFAS-degrading enzyme DhaA. When PFAS is lacking in the environment, the downstream gene is not expressed.

### 2. Obtaining the Target Strain

Through *E. coli* transformation, colony PCR, and restriction digestion verification, we obtained the target strain DE3+ccdB+crcB+dhaA.

### 3. Determining the Optimal Concentration for Arabinose-Induced *ccdB* Expression

A single colony of the DE3-ccdB+crcB+dhaA strain was inoculated into 5 mL of LB medium containing streptomycin, kanamycin, and ampicillin, and cultured overnight. It was then transferred to a new 20 mL medium and cultured until OD600 = 0.4.

Twenty-eight 15mL tubes containing 5mL of LB liquid medium were prepared from the same batch. Filter-sterilized arabinose stock solution was added to achieve final concentrations (mass/volume ratio: m/v) of 0, 0.1%, 0.2%, 0.3%, 0.4%, 0.5%, and 0.6% respectively.

Then, 1% (by volume) of the initial bacterial culture at OD600=0.4 was inoculated into the media and cultured at 37°C, 200 rpm for 12h. The next day, 3mL of bacterial culture was taken to measure OD600, confirming that adding arabinose can induce strain suicide, and the optimal inducing concentration of arabinose was determined.

### 4. Determining the Optimal Timing and Concentration for Fluoride Ion-Induced *crcB* Expression

A single colony of the strain DE3+ccdB+crcB+dhaA was inoculated into 5 mL of LB medium containing ampicillin and kanamycin, cultured overnight, then transferred to a new 20 mL medium and cultured until OD600 = 0.4.

Twenty-four culture dishes containing LB solid medium were supplemented with filter-sterilized NaF solution, and 50 microliters of bacterial suspension were spread onto each, resulting in final fluoride ion concentrations of 0, 2, 4, 6, 8, 10, 12, 14 mmol/L respectively. These were cultured at 37°C (Note: rpm is typically for liquid cultures; solid plates are static) for 8h.

Observe the colony color on the medium, take photographs, create comparison charts, and measure fluorescence intensity using a microplate reader to determine the optimal induction time and concentration.