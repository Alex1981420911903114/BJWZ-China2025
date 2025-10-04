# Model

Detection & Degradation Mathematical Modeling
## I. Biochemical Mechanism Analysis
Plasmid 1 (PFAS Detection and Degradation Module)
• The prmA promoter is activated by PFAS.
• P2A cleavage produces DhaA and GFP proteins.
• The DhaA degrades PFAS to generate fluoride ions (F-).
• GFP acts as a reporter to emit fluorescence.

Plasmid 2 (Fluoride Ion-Responsive Transport Module)
• The pT7-F- riboswitch part is activated by fluoride ions.
• Expresses CrcB+mCherry.
• P2A cleavage produces CrcB protein and mCherry.
• CrcB transports fluoride ions out of the cell.
• mCherry acts as a reporter gene to emit fluorescence.

## II. Model Assumptions
Before listing the biochemical reaction equations, we make the following assumptions:
1. P2A cleavage is completed instantaneously after translation and does not affect other functions.
2. Environmental conditions (temperature, humidity…) are constant and suitable.
3. PFAS is uniformly distributed inside and outside the cell, with equal internal and external concentrations.
4. The number of gene copies is fixed (CN₁and CN₂).
5. RNA polymerase and ribosomes are sufficient and do not affect the reaction rate.
6. Transcription factor binding/dissociation is completed instantaneously.
7. mRNA kinetics are much faster than those of proteins, allowing the use of quasi-steady-state approximation (QSSA).
8. Enzymatic reactions follow the Michaelis-Menten equation.
9. All degradation processes follow first-order kinetics.

## III. Biochemical Reaction Equations
Based on the above, we can list the following biochemical reactions:
1. PFAS + prmA → prmA:PFAS (activation of transcription)
2. prmA:PFAS → mRNA₁(transcription)
3. mRNA₁ → DhaA + GFP (translation and cleavage)
4. PFAS + DhaA → DhaA:PFAS → DhaA + Products + F- (enzyme catalysis)
5. F⁻+ pT7 → pT7:F⁻ (activation of transcription)
6. pT7:F⁻→ mRNA₂ (transcription)
7. mRNA₂ → CrcB + mCherry (translation and cleavage)
8. F⁻+ CrcB → CrcB:F⁻ → CrcB + F⁻ₑₓₜ(fluoride ion export)
In addition, there are degradation processes of mRNA and proteins.

## IV. Ordinary Differential Equations (ODEs)
• P: PFAS concentration
• F: Fluoride ion concentration
• mRNA₁: mRNA concentration of Plasmid 1
• mRNA₂: mRNA concentration of Plasmid 2
• D: DhaA concentration
• G: GFP concentration
• C: CrcB protein concentration
• M: mCherry concentration
Based on the law of mass action and enzyme kinetics, we establish a complete ODE system:
• dmRNA₁/dt = kₜ₁·CN₁·P/(KD₁+P) - dₘ₁·mRNA₁
• dmRNA₂/dt = kₜ₂·CN₂·F/(KD₂+F) - dₘ₂·mRNA₂
• dD/dt = kₜₗ₁·mRNA₁ - dₚ·D
• dG/dt = kₜₗ₁·mRNA₁ - dₚ·G
• dC/dt = kₜₗ₂·mRNA₂ - dₚ·C
• dM/dt = kₜₗ₂·mRNA₂ - dₚ·M
• dP/dt = -kₐ·D·P/(Kₘ+P)
• dF/dt = kₐ·D·P/(Kₘ+P) - kₑ·C·F/(Kₑ+F) - dₚ·F
Parameter Meanings:
• kₜ₁, kₜ₂: Transcription rate constants
• CN₁, CN₂: Plasmid copy numbers
• KD₁, KD₂: Dissociation constants
• dₘ₁, dₘ₂: mRNA degradation rate constants
• kₜₗ₁, kₜₗ₂: Translation rate constants
• dₚ: Protein degradation rate constant
• kₐ: Enzyme catalytic rate constant
• Kₘ: Michaelis constant
• kₑ: Fluoride ion export rate constant
• Kₑ: Half-saturation constant for the export process

## V. Model Simplification
QSSA is used to simplify mRNA kinetics:
Set dmRNA₁/dt = 0 and dmRNA₂/dt = 0, then:
• mRNA₁ = (kₜ₁·CN₁/dₘ₁)·P/(KD₁+P)
• mRNA₂ = (kₜ₂·CN₂/dₘ₂)·F/(KD₂+F)
Substitute into the protein expression equations:
• dD/dt = kₜₗ₁·(kₜ₁·CN₁/dₘ₁)·P/(KD₁+P) - dₚ·D
• dG/dt = kₜₗ₁·(kₜ₁·CN₁/dₘ₁)·P/(KD₁+P) - dₚ·G
• dC/dt = kₜₗ₂·(kₜ₂·CN₂/dₘ₂)·F/(KD₂+F) - dₚ·C
• dM/dt = kₜₗ₂·(kₜ₂·CN₂/dₘ₂)·F/(KD₂+F) - dₚ·M
Define new parameters:
• k₁ = kₜₗ₁·kₜ₁·CN₁/dₘ₁
• k₂ = kₜₗ₂·kₜ₂·CN₂/dₘ₂
Simplified ODE system:

• dD/dt = k₁·P/(KD₁+P) - dₚ·D
• dG/dt = k₁·P/(KD₁+P) - dₚ·G
• dC/dt = k₂·F/(KD₂+F) - dₚ·C
• dM/dt = k₂·F/(KD₂+F) - dₚ·M
• dP/dt = -kₐ·D·P/(Kₘ+P)
• dF/dt = kₐ·D·P/(Kₘ+P) - kₑ·C·F/(Kₑ+F) - dₚ·F

## VI. Solving and Plotting with Python
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp
# Chinese support
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
# Model parameters
params = {
    'k1': 0.5,  # Expression rate constant of Plasmid 1
    'k2': 0.3,  # Expression rate constant of Plasmid 2
    'KD1': 10,  # Dissociation constant of PFAS and prmA
    'KD2': 5,   # Dissociation constant of fluoride ion and pT7-F- riboswitch
    'dp': 0.05, # Protein degradation rate constant
    'ka': 0.8,  # Enzyme catalytic rate constant
    'Km': 15,   # Michaelis constant
    'ke': 0.2,  # Fluoride ion export rate constant
    'Ke': 8     # Half-saturation constant for the export process
    }
# Differential equation system
def system(t, y, params):
P, F, D, G, C, M = y
# Expression of Plasmid 1
expr1 = params['k1'] * P / (params['KD1'] + P)
# Expression of Plasmid 2
expr2 = params['k2'] * F / (params['KD2'] + F)
# Enzymatic reaction
enzyme_rxn = params['ka'] * D * P / (params['Km'] + P)
# Fluoride ion export
export_rxn = params['ke'] * C * F / (params['Ke'] + F)
# Differential equations
dPdt = -enzyme_rxn
dFdt = enzyme_rxn - export_rxn - params['dp'] * F
dDdt = expr1 - params['dp'] * D
dGdt = expr1 - params['dp'] * G
dCdt = expr2 - params['dp'] * C
dMdt = expr2 - params['dp'] * M
return [dPdt, dFdt, dDdt, dGdt, dCdt, dMdt]
# Time range
t_span = (0, 200)
t_eval = np.linspace(0, 200, 1000)
# Initial conditions
P0 = 100  # Initial PFAS concentration
y0 = [P0, 0, 0, 0, 0, 0]  # [P, F, D, G, C, M]
# Solve the differential equations
sol = solve_ivp(system, t_span, y0, t_eval=t_eval, args=(params,))
# Plot time-dependent curves
plt.figure(figsize=(12, 10))
plt.subplot(2, 2, 1)
plt.plot(sol.t, sol.y[0], label='PFAS')
plt.plot(sol.t, sol.y[1], label='Fluoride Ion')
plt.ylabel('Concentration')
plt.legend()
plt.title('Time-Dependent Curves of PFAS and Fluoride Ion')
plt.subplot(2, 2, 2)
plt.plot(sol.t, sol.y[3], label='GFP')
plt.plot(sol.t, sol.y[5], label='mCherry')
plt.ylabel('Concentration')
plt.legend()
plt.title('Time-Dependent Curves of GFP and mCherry')
plt.subplot(2, 2, 3)
plt.plot(sol.t, sol.y[2], label='DhaA')
plt.plot(sol.t, sol.y[4], label='CrcB')
plt.xlabel('Time')
plt.ylabel('Concentration')
plt.legend()
plt.title('Time-Dependent Curves of Enzymes')
plt.subplot(2, 2, 4)
plt.plot(sol.t, sol.y[0]/P0*100, label='PFAS Residue Rate (%)')
plt.plot(sol.t, (P0 - sol.y[0])/P0*100, label='PFAS Degradation Rate (%)')
plt.xlabel('Time')
plt.ylabel('Percentage')
plt.legend()
plt.title('Time-Dependent Curve of PFAS Degradation')
plt.tight_layout()
plt.show()
# Study the effect of different initial PFAS concentrations
P0_range = np.linspace(10, 200, 20)
GFP_steady = []
mCherry_steady = []
degradation_rate = []
degradation_time_50 = []  # Time required for 50% degradation
degradation_efficiency = []  # Degradation efficiency = Degradation rate / Degradation time
for P0 in P0_range:
y0 = [P0, 0, 0, 0, 0, 0]
sol = solve_ivp(system, t_span, y0, t_eval=t_eval, args=(params,))
# Record steady-state values (average of the last 10% of time)
n_steady = int(0.9 * len(sol.t))
GFP_steady.append(np.mean(sol.y[3][n_steady:]))
mCherry_steady.append(np.mean(sol.y[5][n_steady:]))
# Calculate PFAS degradation rate
initial_P = sol.y[0][0]
final_P = sol.y[0][-1]
degradation_rate.append((initial_P - final_P) / initial_P * 100)
# Calculate time required for 50% degradation
half_P = initial_P / 2
half_time_idx = np.where(sol.y[0] <= half_P)[0]
if len(half_time_idx) > 0:
    degradation_time_50.append(sol.t[half_time_idx[0]])
else:
    degradation_time_50.append(t_span[1])
# Calculate degradation efficiency (using 50% degradation time)
if degradation_time_50[-1] > 0:
    efficiency = degradation_rate[-1] / degradation_time_50[-1]
else:
    efficiency = 0
degradation_efficiency.append(efficiency)
# Plot the effect of different initial PFAS concentrations
plt.figure(figsize=(12, 8))
plt.subplot(2, 2, 1)
plt.plot(P0_range, GFP_steady, 'o-', color='green')
plt.ylabel('GFP')
plt.title('Effect of Initial PFAS Concentration on GFP Final Steady-State Value')
plt.subplot(2, 2, 2)
plt.plot(P0_range, mCherry_steady, 'o-', color='red')
plt.ylabel('mCherry')
plt.title('Effect of Initial PFAS Concentration on mCherry Final Steady-State Value')
plt.subplot(2, 2, 3)
plt.plot(P0_range, degradation_time_50, 'o-', color='blue')
plt.ylabel('Degradation Time')
plt.legend()
plt.title('Effect of Initial PFAS Concentration on Degradation Time')
plt.subplot(2, 2, 4)
plt.plot(P0_range, degradation_efficiency, 'o-', color='orange')
plt.xlabel('Initial PFAS Concentration')
plt.ylabel('Degradation Efficiency')
plt.title('Effect of Initial PFAS Concentration on Degradation Efficiency')
plt.tight_layout()
plt.show()
# Find the optimal PFAS concentration (maximizing PFAS degradation efficiency)
optimal_idx = np.argmax(degradation_efficiency)
optimal_P0 = P0_range[optimal_idx]
max_efficiency = degradation_efficiency[optimal_idx]
print(f"Initial PFAS concentration with maximum degradation efficiency: {optimal_P0:.2f}")
print(f"Degradation time: {max_efficiency:.4f} %/time unit")
print(f"Other components:")
print(f" - Degradation half-life: {degradation_time_50[optimal_idx]:.2f} time units")
print(f" - GFP final steady-state value: {GFP_steady[optimal_idx]:.2f}")
print(f" - mCherry final steady-state value: {mCherry_steady[optimal_idx]:.2f}")
# Plot the time course at the optimal concentration
y0 = [optimal_P0, 0, 0, 0, 0, 0]
sol_optimal = solve_ivp(system, t_span, y0, t_eval=t_eval, args=(params,))
plt.figure(figsize=(12, 8))
plt.plot(sol_optimal.t, sol_optimal.y[0], label='PFAS')
plt.plot(sol_optimal.t, sol_optimal.y[1], label='Fluoride Ion')
plt.plot(sol_optimal.t, sol_optimal.y[3], label='GFP')
plt.plot(sol_optimal.t, sol_optimal.y[5], label='mCherry')
plt.xlabel('Time')
plt.ylabel('Concentration')
plt.legend()
plt.title(f'Time-Dependent Curves of Components at Optimal PFAS Degradation Initial Concentration (Efficiency) ({optimal_P0:.2f})')
plt.show()
# Plot the relationship between degradation efficiency and initial PFAS concentration
plt.figure(figsize=(10, 6))
plt.plot(P0_range, degradation_efficiency, 'o-', color='orange')
plt.plot(optimal_P0, max_efficiency, 'ro', markersize=10, label='Optimal Concentration')
plt.xlabel('Initial PFAS Concentration')
plt.ylabel('PFAS Degradation Efficiency')
plt.title('PFAS Degradation Efficiency vs. Initial Concentration')
plt.legend()
plt.grid(True)
plt.show()
```

## VII. Model Analysis and Interpretation
1. Time-Dependent Curves
    - PFAS concentration decreases gradually over time, degraded by the DhaA enzyme.

    - Fluoride ion concentration first increases and then decreases, transported out of the cell by the CrcB protein.
    - The expressions of GFP and mCherry increase over time and eventually reach a steady state.
2. Effect of Initial PFAS Concentration
    - At low PFAS concentrations, the expressions of GFP and mCherry are relatively low.
    - As the PFAS concentration increases, the expression levels first increase and then tend to saturate.
    - The PFAS degradation rate decreases with the increase of initial concentration.
    - A high PFAS concentration requires more time to achieve 50% degradation.

## VIII. Model Applications
This model can be used for:
1. Predicting the behavior of the system under different initial conditions.
2. Optimizing the PFAS concentration to obtain the best detection effect.
3. Designing experimental schemes and adjusting parameters.
4. Evaluating the response ability of the system to PFAS pollution.
