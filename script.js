// Données des projets
const projectsData = {
    1: {
        title: "SAE 1.01 - Hygiène Informatique & Cybersécurité",
        objectifs: ["AC 11.02", "AC 11.04", "AC 11.05"],
        apprentissage: "À partir d'un sujet prédéfini, créer une présentation sensibilisant à l'hygiène informatique et donc à la cybersécurité",
        sujet: "Découvrir les machines du réseau",
        acquis: "J'ai acquis des connaissances réseau sur des fondamentaux du fonctionnement d'un réseau local et des interactions entre ces machines, ainsi que certaines connaissances sur les failles basiques de sécurité qui exposent ces machines sur un réseau local avec une configuration trop basique.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/1.01/Partie_Découvrir_les_OS_des_machines_d’un_Réseau.pdf" target="_blank" class="proof-link">📄 Présentation SAE 1.01 (PDF)</a>',
        evaluation: "Cette SAE m'a permis de compléter des connaissances théoriques grâce à de la recherche et de la pratique avec des outils logiciels Linux tout en mettant cette pratique sous forme de notice. Cela m'a relancé dans l'expression orale grâce à la présentation de notre oral préparé grâce à notre pratique, une chose qui n'a pas toujours été le centre de mes occupations, même si je n'ai finalement pas eu de grandes difficultés à présenter mon travail à l'oral.",
        competences: ["Réseau local", "Sécurité informatique", "Outils Linux", "Présentation orale", "Recherche documentaire"],
        status: "completed"
    },
    2: {
        title: "SAE 1.02 - Infrastructure Réseau ",
        objectifs: ["AC 11.01", "AC 11.02", "AC 11.03", "AC 11.04", "AC 11.05", "AC 11.06"],
        apprentissage: "Mettre en place des schémas de notre réseau, mise en lien avec la partie IP / Matériel, mise en relation avec le type de lien et de zone réseau (VLAN)",
        sujet: "Création de Schéma, réseau et compte rendu",
        acquis: "J’ai pu apprendre à instancier des OS dans un espace dédier, tout en installant les services réseau nécessaires.<br>J’ai appris à utiliser le logiciel Visio, son installation, sa configuration, l’utilisation de Template de matériels réseau dédié à celui-ci.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/1.02/CR.pdf" target="_blank" class="proof-link">📄 Compte Rendu Projet (PDF)</a><br><a href="/Document/1.02/SchémaLogique.pdf" target="_blank" class="proof-link">📄 Schéma Logique (PDF)</a><br><a href="/Document/1.02/SchémaPhysique.pdf" target="_blank" class="proof-link">📄 Schéma Physique (PDF)</a>',
        evaluation: "Cette SAE m’a pris principalement du temps, j’ai pu avec de la patience acquérir les connaissances nécessaires aux objectifs que je devais remplir, sur la partie Visio / Schéma je n’ai eu aucun problème, utilisant énormément le logiciel pour mettre à jour notre réseau, J’ai pu observer mes erreurs de mise en place et corriger mes petites erreurs. Mais sur la partie service réseau, quelques détails n'étaient pas parfaits comme la mise en place de certaines permissions sur les partages de fichiers. A notre niveau ces erreurs n’étaient pas un problème, elles étaient tout à fait justifiées car un tel travail n’aurait pu, dans la logique, être fait.",
        competences: ["Réseau local", "Sécurité informatique", "Outils Linux", "Recherche documentaire"],
        status: "completed"
    },
    3: {
        title: "SAE 1.03 - Utilisation fibre optique et cuivre",
        objectifs: ["AC 12.01", "AC 12.03", "AC 12.05"],
        apprentissage: "En équipe de 5 à 6 réaliser les TP en liens avec des domaines différents de la télécommunication et les méthodes de raccordement internet ",
        sujet: "Calcule atténuation et longueur de câble",
        acquis: "J’ai pu apprendre sur l’utilisation de matériel utilisé dans le monde professionnel et des cas de mesures de leur nécessité, les contraintes de certaines configurations d’installation fibre, les perturbations possibles selon certaines situations. En outre, avec notre câble Ethernet/coaxial, certains points intéressants ont pu être découverts sur certaines unités de mesures et leur intérêt.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/1.03/CompteRendu1.03.pdf" target="_blank" class="proof-link">📄 Compte Rendu (PDF)</a>',
        evaluation: "Cette SAE m’a permis d’en apprendre plus sur les solutions de raccordement fibre / internet pour les particuliers et / ou les entreprises, cela nous a mis en avant une certaine problématique de perturbation dans le cas d’une installation fibre avec une double bobine fibre. Nous étions dans l’inconnu et cela a poussé une partie de notre équipe dans une certaine difficulté au début du projet, mais nous avons pu, avec du temps et de la recherche, mieux comprendre ce que nous faisions et ce que nous cherchions.",
        competences: ["Fibre Optique", "Connaissance Physique"],
        status: "completed"
    },
    4: {
        title: "SAE 1.04 - Développement web et déploiement de code",
        objectifs: ["AC 13.01", "AC 13.04"],
        apprentissage: "Sur le thème de notre choix créer un site web utilisant du HTML et du CSS et apprendre à utiliser un environnement de dépôt de travail basé sur « GitLab »",
        sujet: "Utilisation language web et Gitlab",
        acquis: "J’ai acquis toutes les principales fonctionnalités du HTML et l’utilisation générale du CCS, la mise en page Web grâce au CSS, l’harmonisation des éléments sur un site Internet, mais il est vrai que certains éléments CSS n’ont pas été forcément utilisés de la façon par laquelle ils devaient l’être, principalement sur l’espace défini aux éléments sur la page.",
        preuves: '<a href="https://sachalethug.github.io/Projet-Final-SAE-1.4/" target="_blank" class="proof-link">📄 Site Web (Lien) </a>',
        evaluation: "Cette SAE m’a permis d’apprendre à développer les langages primordiaux de la création de site web. J’ai pu, avec du temps, créer ce que je souhaitais, mis à part que n’étant pas un expert dans le dev web, j’ai parfois rencontré des difficultés à utiliser correctement certains éléments CSS et certaines fois j’ai fait des compromis sur ma mise en page. Je n’ai finalement eu aucun souci pour la gestion de mes sauvegardes grâce à la partie « GitLab » de « GitHub » en ajoutant des commentaires pertinents et en n’ayant aucun problème sur la mise en place de la mise en ligne.",
        competences: ["WebDev", "Déploiement de code"],
        status: "completed"
    },
    5: {
        title: "SAE 1.05 - Site intéractif sur les pokémon",
        objectifs: ["AC 13.01", "AC 13.06"],
        apprentissage: "En binôme avec l’utilisation de langages de programmation web comme le HTML et le JSON pour créer un site affichant les stats du Pokémon demandé et un autre devant faire combattre des Pokémon avec des stats de combat personnalisé",
        sujet: "Atténuation et longueur calbe coaxial et fibre optique",
        acquis: "J’ai acquis de nouvelles connaissances sur le langage web, principalement sur l’intégration de tâches automatisées de requête vers des API et des moyens pour retourner ces informations dans une version modifiée à la demande pour chaque requête vers cette API.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/1.05/site_PokeAPI.zip" target="_blank" class="proof-link">📄 Site Web (.zip / Python) </a>',
        evaluation: "Cette SAE m’a permis de pousser avec mon collègue nos limites sur le domaine du dev web mais les objectifs étaient trop élevés pour notre niveau et notre domaine dans lequel nous sommes, donc des grandes difficultés et des problèmes se sont posés, Il a fallu énormément de temps pour faire des choses dont nous n’étions même pas sûrs. Cela n’était certes pas facile mais n’est pas forcément obligatoire à créer par nous-mêmes, l’important était de pouvoir remanier ce code pour en modifier son code si besoin.",
        competences: ["Programmation Python", "Language web avancé (JSON)"],
        status: "completed"
    },
    6: {
        title: "SAE 2.01 - Infrastructure Réseau V2",
        objectifs: ["AC 11.02", "AC 11.03", "AC 11.04", "AC 11.05", "AC 11.06"],
        apprentissage: "Mettre en place individuellement un Windows Server 2019 avec les services ADDS et utilisateur / groupe demandés",
        sujet: "Création de Schéma, mise en place services, réseau et compte rendu",
        acquis: "J’ai pu apprendre à utiliser l’espace de virtualisation « proxmox », comment le configurer pour créer des instances de virtualisation pour Windows Server 2019, installer les pilotes pour les périphériques virtuels, installer et utiliser un serveur ADDS pour gérer un domaine réseau, pouvoir connecter un poste sur cet ADDS, créer des utilisateurs, groupes, OU et savoir leur appliquer des règles spécifiques selon les besoins.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/2.01/SAE21_Integration_domaine_ADDS_V1_4.pdf" target="_blank" class="proof-link">📄 Sujet entrainement évaluation (PDF) </a>',
        evaluation: "Cette SAE m’a permis de développer mes connaissances Windows et plus précisément sur les services / serveur Windows Server. J’ai pu apprendre à créer et gérer un serveur ADDS, soit un domaine réseau, cela m’a été d’une grande aide étant donné l’importance de ce type de service dans les réseaux de services public et privé. En outre, j’ai pu apprendre à déployer les machines clients sur ce type de réseau / méthode de gestion d’utilisateurs.",
        competences: ["Réseau local", "Sécurité informatique", "Outils Windows", "Recherche documentaire"],
        status: "completed"
    },
    7: {
        title: "SAE 2.02 - Fréquence radio FM",
        objectifs: ["AC 12.01", "AC 12.02", "AC 12.03", "AC 12.05"],
        apprentissage: "En binôme, nous devions réaliser des TP en lien avec l’étude de fréquence, plus précisément les ondes courtes, leur fonctionnement, le domaine de la FM.",
        sujet: "Traitement et utilisation des différentes information physique utiliser par la FM",
        acquis: "J’ai pu apprendre les méthodes de diffusion du son et des métadonnées d’une radio, l’utilisation des méthodes d’émission des fréquences pour le mono, stéréo, RDS (métadonnées), la méthode de réception de l’onde radio, la largeur de bande utilisée pour la réception.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/2.02/CRSAE2.02.pdf" target="_blank" class="proof-link">📄 Compte Rendu (PDF) </a>',
        evaluation: "Cette SAE m’a permis d’apprendre et de comprendre les méthodes de diffusion radio, les différents éléments composant une émission radio, les éléments analogiques qui expliquent le fonctionnement de la FM, ce qui peut être utile pour le faire soi-même dans le futur et, si besoin, émettre localement sa propre radio.",
        competences: ["Maitrise de la FM", "Traitement des informations analogique FM"],
        status: "completed"
    },
    8: {
        title: "SAE 2.03 - Site Weather App V2",
        objectifs: ["AC 13.01", "AC 13.02", "AC 13.03", "AC 13.04", "AC 13.05", "AC 13.06"],
        apprentissage: "Description de l'apprentissage à compléter",
        sujet: "Création d'une webapp pour la météo avec JavaScript",
        acquis: "J’ai pu apprendre sur l’utilisation des langages web, sur la dynamisation des informations sur une page web, permettant la consultation automatique à partir d’API que j’ai mises en place avec mon code. Utilisation de police customiser pour afficher des caractères spéciaux, animations des modes sombres.",
        preuves: '<a href="https://sachalethug.github.io/SAE2.03-Instant-Weather-V2/" target="_blank" class="proof-link">📄 Site Web (Lien 1) </a>',
        evaluation: "Cette SAE m’a permis d’améliorer grandement mes connaissances dans le domaine du développement web avec l’implémentation de JavaScript, qui est d’une grande importance pour faire un site web. Il a fallu beaucoup de temps mais j’ai pu rendre à temps le travail en ayant compris par moi-même comment faire.",
        competences: ["Maistrise language web", "Utilisation d'API avec automatisation JavaScript"],
        status: "completed"
    },
    9: {
        title: "SAE 2.04 - Projet Intégratif de Semestre 2",
        objectifs: ["AC 13.01", "AC 13.02", "AC 13.03", "AC 13.04", "AC 13.05", "AC 13.06"],
        apprentissage: "Travailler l’ensemble des matières dans un projet vaste pour valider l’ensemble des compétences acquises pendant l’année",
        sujet: "Révision général sur l'ensemble des connaissances acquise pendant cette première année de BUT",
        acquis: "J’ai pu retravailler des connaissances acquises au première semestre comme avec à nouveau le même type de projet qu’en SAE 1.02, avec également de la physique et des mathématiques.",
        preuves: '<a href="Site-Final-SAE-1.06//Document/2.04/SAE24_Volet_Télécom.pdf" target="_blank" class="proof-link">📄 Sujet Physique (PDF) </a><br><a href="/Document/2.04/SAE24MATH_TP2024.pdf" target="_blank" class="proof-link">📄 Sujet Math (PDF) </a><br><a href="/Document/2.04/Installation_Complete_de_GNS3 Debian.pdf" target="_blank" class="proof-link">📄 Notice Service GN3Server (PDF) </a>',
        evaluation: "Cette SAE m’a permis d’améliorer notre projet réseau du premier semestre avec l’ajout de services Windows ADDS, GNS3server pour des schémas de réseau virtuel avec de nouvelles connaissances et pour la partie math physique j’ai pu apprendre certaines connaissances pour ma prochaine année de BUT via des TP.",
        competences: ["Réseau local", "Sécurité informatique", "Outils Linux", "Outils Windows", "Recherche documentaire", "Connaissances mathématique / physique"],
        status: "completed"
    }
};

// Gestion de la navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation fluide
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gestion du menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Gestion du header au scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Fonction pour ouvrir le modal d'un projet
function openProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="project-detail">
            <h2>${project.title}</h2>
            
            <div class="project-section">
                <h3>🎯 Objectifs académiques</h3>
                <ul>
                    ${project.objectifs.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-section">
                <h3>📚 Apprentissage de la SAE</h3>
                <p>${project.apprentissage}</p>
            </div>
            
            <div class="project-section">
                <h3>🔍 Sujet traité</h3>
                <p>${project.sujet}</p>
            </div>
            
            <div class="project-section">
                <h3>✅ Acquis</h3>
                <p>${project.acquis}</p>
            </div>
            
            <div class="project-section">
                <h3>📋 Preuves</h3>
                <p>${project.preuves}</p>
            </div>
            
            <div class="project-section">
                <h3>📊 Évaluation globale</h3>
                <p>${project.evaluation}</p>
            </div>
            
            <div class="project-section">
                <h3>🚀 Compétences développées</h3>
                <div class="competences-list">
                    ${project.competences.map(comp => `<span class="competence-tag">${comp}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Gestion de la fermeture du modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Animation de typing pour le hero
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Effet de particules pour le background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: particleFloat ${Math.random() * 3 + 2}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Ajout des styles CSS pour les particules et le modal
const additionalStyles = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .project-detail h2 {
        color: var(--primary-color);
        margin-bottom: 2rem;
        font-size: 1.8rem;
    }
    
    .project-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: var(--background-light);
        border-radius: 10px;
        border-left: 4px solid var(--primary-color);
    }
    
    .project-section h3 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .project-section p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .project-section ul {
        list-style: none;
        padding-left: 0;
    }
    
    .project-section li {
        color: var(--text-light);
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .project-section li:last-child {
        border-bottom: none;
    }
    
    .competences-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .proof-link {
        display: inline-block;
        background: var(--gradient-primary);
        color: var(--white);
        padding: 0.8rem 1.5rem;
        text-decoration: none;
        border-radius: 25px;
        font-weight: 600;
        transition: all 0.3s ease;
        margin-top: 0.5rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
    
    .proof-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        color: var(--white);
    }
    
    .proof-link:visited {
        color: var(--white);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem;
        box-shadow: var(--shadow);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;

// Ajouter les styles additionnels
document.addEventListener('DOMContentLoaded', function() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
    
    // Créer les particules
    createParticles();
});

// Fonction pour mettre à jour un projet
function updateProject(projectId, newData) {
    if (projectsData[projectId]) {
        projectsData[projectId] = { ...projectsData[projectId], ...newData };
        
        // Mettre à jour le statut visuel
        const projectCard = document.querySelector(`[data-project="${projectId}"]`);
        if (projectCard) {
            const statusElement = projectCard.querySelector('.project-status');
            if (newData.status === 'completed') {
                statusElement.textContent = 'Terminé';
                statusElement.style.background = 'var(--gradient-accent)';
            }
            
            // Mettre à jour le titre et la description
            if (newData.title) {
                projectCard.querySelector('.project-preview h4').textContent = newData.title.split(' - ')[1] || newData.title;
            }
            
            if (newData.description) {
                projectCard.querySelector('.project-preview p').textContent = newData.description;
            }
        }
    }
}

// Fonction utilitaire pour exporter les données
function exportProjectData() {
    const dataStr = JSON.stringify(projectsData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'portfolio_projects.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Fonction pour importer des données
function importProjectData(jsonData) {
    try {
        const importedData = JSON.parse(jsonData);
        Object.assign(projectsData, importedData);
        console.log('Données importées avec succès');
        location.reload(); // Recharger la page pour refléter les changements
    } catch (error) {
        console.error('Erreur lors de l\'importation:', error);
    }
}
