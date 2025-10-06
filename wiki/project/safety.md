# Safety
## Chassis Safety

The project employs E. coli BL21 (DE3) as the chassis strain, which exhibits high tolerance to PFAS, preventing bacterial activity decline due to excessive PFAS absorption and reducing metabolic risks under environmental stress from the strain's inherent characteristics. Meanwhile, a dual suicide system is introduced via genetic engineering: one is the arabinose-inducible ccdB gene (encoding a cytotoxic protein), and the other is the MazE/F toxin-antitoxin system. Adding arabinose or specific induction conditions triggers programmed cell death in the strain, preventing engineered bacteria from escaping or spreading in the natural environment and ensuring the controllability and biosafety level of the chassis organism.

## Parts Safety

Gene parts are designed following safety principles: the PFAS-sensitive promoter prmA activates the expression of dhaA (dehalogenase) and GFP only in the presence of PFAS, avoiding unnecessary protein synthesis in the absence of pollutants. The fluoride riboswitch regulates the crcB gene, activating the expression of fluoride ion transporter via fluoride binding to reduce intracellular fluoride concentration and prevent toxicity accumulation. The suicide gene ccdB is regulated by the arabinose operon to ensure spatiotemporal specificity of induced expression. Additionally, reporter genes GFP and mCherry are solely used for visual monitoring without participating in toxic pathways, and each part is precisely assembled via restriction sites to minimize genetic recombination risks.
![safe1](https://static.igem.wiki/teams/5838/safety/safety1.webp)

## Devices Safety

The integrated “detection-degradation”system ensures safety through multiple mechanisms: the PFAS-induced degradation pathway is coupled with a fluorescent reporting system to provide real-time feedback on pollutant concentration while avoiding overexpression. The fluoride transport system collaborates with the suicide system: when environmental fluoride concentration is high, crcB preferentially initiates fluoride efflux to maintain strain viability, and arabinose can induce ccdB expression to inactivate the strain if experiment termination is needed. The system design avoids using antibiotic resistance genes as selection markers (except during laboratory verification), reducing the risk of horizontal resistance gene transfer. Functional modules are expressed separately via plasmid vectors to minimize potential genetic linkage mutations.

## Lab Safety

Before our team started the experiment, we went to Beijing Normal University for laboratory safety training. The consultant provided training on laboratory safety and the correct use of laboratory equipment. Everyone learned the correct procedures to operate the equipment and was reminded of their potential dangers and the consequences of improper use. In addition, we return each device to the designated location after use. This step is very important because it can help students who use the same experimental.

Experimental operations strictly follow biosafety protocols: LB medium is autoclaved at 121°C for 20 minutes, and antibiotics (ampicillin, kanamycin, etc.) are stored at -20°C and used at working concentrations (100 μg/mL or 50 μg/mL) to prevent resistant bacteria contamination. Strains are preserved in 50% glycerol tubes at -80°C to avoid mutation. Operations involving PFAS (e.g., PFBA, PFOA) and fluorides (NaF) are conducted in a fume hood, with personnel wearing gloves and goggles.
![safe2](https://static.igem.wiki/teams/5838/safety/safety2.webp)

In the process of experiments, we deeply understand the importance of placing drugs and experimental equipment neatly, which can not only effectively prevent drug leakage, but also prevent the spread of drugs during the experiment, and effectively maintain our safety in the experiment. In the laboratory, we separate different areas of nucleic acid dyes and electrophoresis to ensure that other experimental reagents and experimental equipment are not contaminated.
![safe3](https://static.igem.wiki/teams/5838/safety/safety3.webp)