# STORM: Pathology–Spatial Transcriptomics Foundation Model Overview

## Positioning
- STORM is a 555M-parameter multimodal foundation model that bridges H&E pathology images and spatial transcriptomics, unifying morphology and molecular signals. 
- Two-stage self-supervised pretraining enables strong generalization for cross-modal alignment, reconstruction, and downstream adaptation.

## Training Corpus & Preprocessing
- histMol corpus: 650k+ paired tiles across tissues, platforms, and resolutions, with resolution-specific preprocessing.  
- Uses masked reconstruction, cross-modal alignment, and positional encodings to adapt to diverse spatial characteristics.

## Architecture
- Multi-branch Transformer: shallow modality-specific encoders; shared deeper Transformer for interaction; cross-attention decoders exchange information across modalities.  
- Combined absolute and relative positional encodings support precise spatial alignment.  
- Cross-modal reconstruction training improves translation between morphology and gene expression.

## Key Capabilities
- **Tissue/region annotation**: higher NMI/AMI/ARI and expert concordance across tissues.  
- **In situ gene expression prediction**: outperforms methods like iSTAR and ST-Net on platforms such as Xenium and Visium.  
- **Prognosis and risk stratification**: generates survival risk heatmaps and interpretable regions directly from whole-slide images (e.g., breast and ovarian cancer).  
- **Pathology–molecular embedding**: unified space that mitigates batch effects and supports continuous modeling of molecular subtypes and pathology regions.  
- **Novel pattern discovery**: examples include a breast cancer progression continuum and relapse-associated immune exclusion zones in ovarian cancer.

## Highlights
- Large-scale, cross-platform, cross-resolution paired-data pretraining reduces domain transfer costs.  
- Unified multimodal embeddings serve classification, regression, retrieval, and segmentation.  
- Strong in low-/weak-label settings; suitable for rapid finetuning or zero-shot use.  
- Provides interpretable spatial heatmaps for joint pathology and omics analysis.

## Typical Use Cases
- Tissue structure annotation and QC  
- In situ gene expression prediction and molecular subtype inference  
- Survival/relapse risk assessment with interpretable maps  
- Cross-cohort/platform embedding alignment and batch-effect mitigation  
- Biomarker discovery combining pathology and spatial omics

