const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 681px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const assistantJourneys = {
  facilities: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'Where can I find a health facility near me?',
      'demo-ack':
        'Start with your village or PIN code. A verified directory can guide you to nearby care.',
      'demo-reference': 'Find nearby care',
      'demo-status': 'Directory connection planned',
      'demo-followup': 'Check opening hours with the facility.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'माझ्या जवळचे आरोग्य केंद्र कुठे आहे?',
      'demo-ack': 'गावाचे नाव किंवा पिन कोड वापरून पडताळलेल्या यादीतून जवळचे केंद्र शोधता येईल.',
      'demo-reference': 'जवळची आरोग्यसेवा शोधा',
      'demo-status': 'आरोग्य केंद्रांची जोडणी नियोजित',
      'demo-followup': 'केंद्राशी संपर्क करून वेळेची खात्री करा.',
    },
  },
  symptoms: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'I feel unwell. What should I do next?',
      'demo-ack':
        'The planned journey helps you explain a concern and reach a qualified care team.',
      'demo-reference': 'Reach a care professional',
      'demo-status': 'Clinical review required',
      'demo-followup': 'For an emergency, seek immediate medical help.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'मला बरे वाटत नाही. पुढे काय करावे?',
      'demo-ack': 'तुमचा त्रास समजून घेऊन योग्य आरोग्यसेवा शोधण्यासाठी मार्गदर्शन नियोजित आहे.',
      'demo-reference': 'आरोग्य तज्ज्ञांशी संपर्क',
      'demo-status': 'वैद्यकीय पुनरावलोकन आवश्यक',
      'demo-followup': 'आणीबाणी असल्यास त्वरित वैद्यकीय मदत घ्या.',
    },
  },
  schemes: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'Which scheme can help with my treatment?',
      'demo-ack':
        'Match official scheme rules, documents and the covered treatment before confirming a benefit.',
      'demo-reference': 'Check eligibility & amount',
      'demo-status': 'Official verification required',
      'demo-followup':
        'The authority confirms your entitlement. A coverage cap is not a cash payout.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'उपचारांसाठी कोणत्या योजनेचा लाभ मिळू शकतो?',
      'demo-ack':
        'लाभ निश्चित करण्यापूर्वी योजनेचे अधिकृत नियम, कागदपत्रे आणि उपचार तपासणे आवश्यक आहे.',
      'demo-reference': 'पात्रता व लाभाची रक्कम',
      'demo-status': 'अधिकृत पडताळणी आवश्यक',
      'demo-followup':
        'लाभ संबंधित प्राधिकरण निश्चित करते. विमा मर्यादा म्हणजे रोख रक्कम मिळण्याची हमी नाही.',
    },
  },
  abha: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'Can I create or retrieve my ABHA?',
      'demo-ack':
        'Use official verification to create or retrieve your health identity with your permission.',
      'demo-reference': 'ABHA creation or retrieval',
      'demo-status': 'ABDM connection planned',
      'demo-followup': 'Health identity and insurance eligibility are separate checks.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'माझा आभा क्रमांक तयार किंवा पुन्हा मिळवता येईल का?',
      'demo-ack':
        'तुमच्या संमतीने अधिकृत पडताळणीद्वारे आरोग्य ओळख तयार किंवा पुन्हा मिळवण्याचे मार्गदर्शन नियोजित आहे.',
      'demo-reference': 'आभा क्रमांक तयार करा किंवा शोधा',
      'demo-status': 'एबीडीएम जोडणी नियोजित',
      'demo-followup': 'आरोग्य ओळख आणि विम्याची पात्रता स्वतंत्रपणे तपासली जातात.',
    },
  },
  records: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'I want to share my last report with my doctor.',
      'demo-ack':
        'Choose the connected record, receiving provider and purpose before approving access.',
      'demo-reference': 'Review sharing permission',
      'demo-status': 'Consent-based connection planned',
      'demo-followup': 'You control the permission to share your records.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'माझा मागील अहवाल डॉक्टरांना दाखवायचा आहे.',
      'demo-ack': 'नोंद, प्राप्तकर्ता आणि वापराचा उद्देश पाहून माहिती शेअर करण्याची संमती द्या.',
      'demo-reference': 'माहिती शेअर करण्याची परवानगी',
      'demo-status': 'संमतीवर आधारित जोडणी नियोजित',
      'demo-followup': 'तुमच्या नोंदी शेअर करण्याची परवानगी तुमच्या नियंत्रणात राहते.',
    },
  },
  booking: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'Can I book an appointment nearby?',
      'demo-ack':
        'Look for slots from a connected facility, choose a time and request confirmation.',
      'demo-reference': 'Confirm an appointment',
      'demo-status': 'Provider connection planned',
      'demo-followup': 'The appointment is booked only when the facility confirms it.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'जवळच्या केंद्रात भेटीची वेळ मिळेल का?',
      'demo-ack': 'जोडलेल्या केंद्रातील उपलब्ध वेळ निवडून भेटीची पुष्टी मागता येईल.',
      'demo-reference': 'भेटीची पुष्टी मिळवा',
      'demo-status': 'आरोग्यसेवा प्रदात्यांची जोडणी नियोजित',
      'demo-followup': 'केंद्राने पुष्टी केल्यावरच भेट निश्चित होते.',
    },
  },
  insurance: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'NEXT STEP',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': 'I need help understanding cashless cover.',
      'demo-ack':
        'Check the scheme or policy, covered treatment and network facility through verified sources.',
      'demo-reference': 'Verify cover & claim status',
      'demo-status': 'Insurer connection planned',
      'demo-followup': 'Final coverage and claim decisions come from the authority or insurer.',
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'पुढचा टप्पा',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'कॅशलेस उपचारांच्या लाभाबद्दल माहिती हवी आहे.',
      'demo-ack':
        'अधिकृत स्रोतांद्वारे योजना, उपचार आणि योजनेतील रुग्णालय तपासण्याचे मार्गदर्शन नियोजित आहे.',
      'demo-reference': 'लाभ व दाव्याची स्थिती तपासा',
      'demo-status': 'विमा किंवा योजना जोडणी नियोजित',
      'demo-followup': 'अंतिम लाभ आणि दाव्याचा निर्णय प्राधिकरण किंवा विमा संस्था घेते.',
    },
  },
  grievance: {
    en: {
      'demo-greeting': "Hello! Let's find your next step.",
      'demo-facility': 'Your statewide health assistant',
      'demo-location': 'Care · Benefits · Records',
      'demo-question': 'How can we help you today?',
      'demo-ticket-label': 'YOUR TICKET',
      'demo-input-label': 'Your health. Your next step…',
      'demo-citizen': "The prescribed medicine wasn't available today.",
      'demo-ack': 'Thank you for telling us. Your grievance has been recorded.',
      'demo-reference': 'WH-DEMO-001',
      'demo-status': 'Sent to district office',
      'demo-followup': "We'll keep you updated right here.",
    },
    mr: {
      'demo-greeting': 'नमस्कार! तुमचा पुढचा टप्पा शोधूया.',
      'demo-facility': 'तुमचा राज्यस्तरीय आरोग्य सहाय्यक',
      'demo-location': 'आरोग्यसेवा · लाभ · आरोग्य नोंदी',
      'demo-question': 'आम्ही तुम्हाला कशी मदत करू शकतो?',
      'demo-ticket-label': 'तुमचा तक्रार क्रमांक',
      'demo-input-label': 'तुमचे आरोग्य. तुमचा पुढचा टप्पा…',
      'demo-citizen': 'डॉक्टरांनी लिहून दिलेले औषध आज उपलब्ध नव्हते.',
      'demo-ack': 'आम्हाला सांगितल्याबद्दल धन्यवाद. तुमची तक्रार नोंदवली आहे.',
      'demo-reference': 'WH-DEMO-001',
      'demo-status': 'जिल्हा कार्यालयाकडे पाठवली',
      'demo-followup': 'पुढील माहिती तुम्हाला इथेच मिळेल.',
    },
  },
};
let demoLanguage = 'en';
const journeySelector = document.querySelector('#demo-service');
const conversation = document.querySelector('.conversation');
let replayTimer;
function replay() {
  clearTimeout(replayTimer);
  conversation.classList.remove('playing');
  // Restart the staged sample after the browser commits the previous state.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      conversation.classList.add('playing');
      replayTimer = setTimeout(() => conversation.classList.remove('playing'), 2600);
    });
  });
}
function showJourney(service, language = demoLanguage) {
  const copy = assistantJourneys[service]?.[language];
  if (!copy) return;
  demoLanguage = language;
  journeySelector.value = service;
  for (const [id, content] of Object.entries(copy)) {
    const element = document.getElementById(id);
    element.textContent = content;
    element.lang = language;
  }
  document.querySelectorAll('[data-language]').forEach((option) => {
    const active = option.dataset.language === language;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-service]').forEach((option) => {
    option.setAttribute('aria-pressed', String(option.dataset.service === service));
  });
  replay();
}
document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () =>
    showJourney(journeySelector.value, button.dataset.language)
  );
});
journeySelector.addEventListener('change', () => showJourney(journeySelector.value));
document.querySelectorAll('[data-service]').forEach((button) => {
  button.setAttribute('aria-pressed', String(button.dataset.service === journeySelector.value));
  button.addEventListener('click', () => {
    showJourney(button.dataset.service);
    journeySelector.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'center',
    });
    journeySelector.focus({ preventScroll: true });
  });
});
document.querySelectorAll('[data-start-demo]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector('.language-switch');
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'center',
    });
    target.querySelector('.active').focus({ preventScroll: true });
    replay();
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.body.classList.add('motion-ready');
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
