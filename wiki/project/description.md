# Description
---
## Problems
Short-chain PFAS (per- and polyfluoroalkyl substances with a carbon chain length of C4-C8) are a category of PFAS. PFAS exhibit extremely strong biological stability and have an extremely wide range of impacts on health. They may increase the risk of heart disease in humans and have adverse effects on child development. Studies have shown that PFAS are closely associated with health effects such as high cholesterol, reduced immunity, and induced liver cancer[1][2]. The presence of PFAS also has severe impacts on the ecological environment. They may cause the death of organisms in water, soil, and air, thereby disrupting the balance of the ecological environment. PFAS can bioaccumulate in higher trophic level animals in the food chain, leading to the accumulation of toxins in their bodies. Additionally, PFAS may inhibit the growth of aquatic plants and animals, cause fishery losses, food poisoning, and environmental pollution, among other issues[3]. 
![des1](https://static.igem.wiki/teams/5838/project/description1.webp)
*Figure 1. Exposure to perfluoroalkyl substances and risk of hepatocellular carcinoma in a multiethnic cohort[1]*

PFAS are known as "persistent chemicals" as their C-F bonds are extremely difficult to biodegrade naturally-the biodegradation process in nature is cumbersome and time-consuming. Moreover, short-chain PFAS are more soluble in water and more mobile than their long-chain counterparts, and thus have been widely detected in water bodies, soils, and organisms across the globe[4].
![des2](https://static.igem.wiki/teams/5838/project/description2.webp)
*Figure 2. Proposed biodegradation pathways for 6:2 F'TOH (Dotted arrows indicate multiple transformation steps)[4].*

In soils at multiple monitoring sites across global coastal regions, PFAS pollution is severe. In some areas, long-chain PFOS poses relatively high ecological risks, while the accumulation trend of short-chain PFAS is also on the rise-posing a threat to drinking water safety. Even the Antarctic region has accumulated considerable concentrations of PFAS[5].
![des3](https://static.igem.wiki/teams/5838/project/description3.webp)
*Figure 3. Distribution of the sample sites and the concentrations of PFASs in Antarctic samples[5].*

Currently, traditional approaches for treating short-chain PFAS are limited. For example, activated carbon adsorption and reverse osmosis are effective for long-chain PFAS but have low efficiency for short-chain ones. The foam separation method requires the addition of surfactants (such as CTAB) to promote the removal of short-chain PFAS; experiments have shown that the concentration can be reduced to below 8 ng/L, but the cost of large-scale application is relatively high[6]. Meanwhile, the detection of PFAS mainly relies on large-scale instruments for chemical analysis (such as LC-MS), which also has high costs. In summery, both the detection and degradation of PFAS are currently costly and have relatively low processing efficiency[7]. Therefore, innovative approaches are urgently needed for the treatment of short-chain PFAS.

## Our Inspiration
PFAS contain a large number of carbon-fluorine bonds, so the most effective way to degrade them is to break these bonds and precipitate the dissociated fluoride ions. We hope to find a solution that uses engineered E. coli to construct an integrated "detection-degradation" system for PFAS. When PFAS are present, E. coli automatically completes "luminescent early warning" and "degradation initiation". Through excitation at a specific wavelength, it emits green fluorescence to indicate the presence of PFAS in sewage. Subsequently, it breaks the carbon-fluorine bonds on PFAS, transports the generated fluoride ions out of the cell, and forms a precipitate with calcium ions in the environment, thereby completing the degradation of PFAS and the removal of fluoride ions. 

## Our Solution
Based on the above principles, we have set up an experimental project hoping to achieve certain effects in the degradation and detection of PFAS.
We use a PFAS-sensitive promoter to drive the expression of the PFAS dehalogenase gene (dhaA) and the GFP gene. To avoid mutual interference with their functions, a corresponding linker and P2A self-cleaving linker are added between them. In this way, as long as green fluorescence is detected in the cells, it indicates that dhaA has been released. When the concentration of PFAS in the environment reaches a certain level, the PFAS-sensitive promoter initiates the expression of dhaA, and the breaking of the carbon-fluorine bonds of PFAS is completed inside the cell, generating fluoride ions. At the same time, E. coli emits green fluorescence under excitation light irradiation, so the concentration of PFAS and the real-time degradation status can be indicated according to the fluorescence intensity.
After the generation of fluoride ions, the expression of the fluoride ion transport gene crcB is activated. The activated CrcB can transport the fluoride ions outside the cell, where they form a precipitate with calcium ions in the environment. Meanwhile, E. coli emits bright cherry red fluorescence under excitation at a specific wavelength, indicating that the transport protein has started to be expressed.
In addition, the arabinose operon is used to control the expression of the ccdB toxin protein, which can ensure the maintenance of biosafety.

## Our Goals
We hope to achieve the following three expected effects through this project.

1. In water samples containing PFAS, the engineered bacteria will emit green fluorescence to monitor the real-time degradation status of PFAS in the environment.

2. While degrading PFAS and forming calcium fluoride precipitates, the engineered bacteria will emit bright cherry red fluorescence to reflect the real-time treatment status of PFAS degradation products.

3. After adding an appropriate concentration of arabinose, the engineered bacteria will complete self-destruction.

We hope to achieve these goals and make our due contributions to environmental protection and bioremediation.

Reference
[1] [Goodrich, J. M., et al. (2022). Exposure to perfluoroalkyl substances and risk of hepatocellular carcinoma in a multiethnic cohort. JHEP Reports, 4(5), 101010](https://doi.org/10.1016/j.jhepr.2022.101010.)
[2] [Buhrke, T., Kibellus, A., & Lampen, A. (2013). In vitro toxicological characterization of perfluorinated carboxylic acids with different carbon chain lengths. Toxicology Letters, 216(2), 125-132.](https://doi.org/10.1016/j.toxlet.2012.12.003.)
[3] [中国科学院烟台海岸带研究所 & 上海交通大学. (2022). 河口食物网中新型全氟聚醚羧酸的生物富集与食物链传递规律。中国科学院院刊，37 (6), 683-693.](https://doi.org/10.1021/acs.est.1c00965.) 
[4] Zhang Z, Sarkar D, Biswas JK, Datta R. Biodegradation of per- and polyfluoroalkyl substances (PFAS): A review. Bioresour Technol. 2022 Jan;344(Pt B):126223. doi: 10.1016/j.biortech.2021.126223. Epub 2021 Oct 28. PMID: 34756980.
[5] [Ke G, Xing M, Jie F., et al. Occurrence and trophic transfer of per- and polyfluoroalkyl substances in an Antarctic ecosystem, Environmental Pollution, 2020, 257.](https://doi.org/10.1016/j.envpol.2019.113383.)
[6] [Wang, Y., et al. (2024). Challenges and advancements in the removal of short-chain PFAS from water: A review. Journal of Hazardous Materials, 478, 130541.](https://doi.org/10.1016/j.jhazmat.2024.130541.)
[7] [Chen, J., et al. (2023). Recent advances in analytical methods for the determination of per- and polyfluoroalkyl substances (PFAS): A review. TrAC Trends in Analytical Chemistry, 165, 116978.](https://doi.org/10.1016/j.trac.2023.116978)