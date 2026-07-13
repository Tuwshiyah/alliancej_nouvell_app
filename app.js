const SUPABASE_URL = 'https://tngbmcyprheoafzwjgkq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vBeMbieP1xrK3TypxjSxIA_4qdpf25G';

const PAYMENT_ORDER = [
  'visa',
  'card',
  'carte',
  'wave',
  'orange',
  'mtn',
  'moov',
];

const ONBOARDING_SLIDES = [
  {
    title: 'Gerez vos contributions facilement',
    description: 'Suivez vos alliances journalieres, consultez vos paiements et recevez des rappels automatiques.',
    visual: 'contributions',
  },
  {
    title: 'Souscrivez pour vos proches',
    description: 'Creez des alliances pour votre conjoint, vos enfants ou tout membre de votre famille depuis un seul compte.',
    visual: 'family',
  },
  {
    title: 'Restez informe en temps reel',
    description: 'Recevez des notifications pour chaque paiement, echeance a venir ou retard. Ne manquez plus rien.',
    visual: 'notifications',
  },
];

const ECHEANCES = [
  { id: 0, name: 'Kone Ibrahim', sub: 'Enfant • Mensuel', montant: 30000, date: '28 Fev 2026', enRetard: true },
  { id: 1, name: 'Kone Ibrahim', sub: 'Enfant • Mensuel', montant: 30000, date: '31 Mar 2026', enRetard: true },
  { id: 2, name: 'Kone Kouadio Jean', sub: 'Moi-meme • Hebdomadaire', montant: 7000, date: '12 Avr 2026', enRetard: false },
  { id: 3, name: 'Kone Amara', sub: 'Conjoint(e) • Mensuel', montant: 60000, date: '30 Avr 2026', enRetard: false },
];

const IMPAYES = [
  {
    id: 1,
    beneficiaire: 'Kone Ibrahim',
    lien: 'Enfant',
    frequence: 'Mensuel',
    montantDu: 30000,
    dateEcheance: '28 Fev 2026',
    joursRetard: 37,
    moisConcerne: 'Fevrier 2026',
  },
  {
    id: 2,
    beneficiaire: 'Kone Ibrahim',
    lien: 'Enfant',
    frequence: 'Mensuel',
    montantDu: 30000,
    dateEcheance: '31 Mar 2026',
    joursRetard: 6,
    moisConcerne: 'Mars 2026',
  },
];

const SUIVI_STATS = {
  depenseMois: 7000,
  totalContribue: 301000,
};

const SUIVI_ALLIANCES = [
  { id: 1, name: 'Kone Kouadio Jean', relation: 'Moi-meme', forfait: '1 000 CFA/jour', frequence: 'Hebdomadaire', prochaine: '12 Avr 2026', montant: '7 000', enRetard: false, tint: '#E2E5FA', tintText: '#1B2091', totalPaye: '91 000', paiements: 13, dateDebut: '01 Jan 2026', dateFin: '31 Dec 2026', statut: 'active' },
  { id: 2, name: 'Kone Amara', relation: 'Conjoint(e)', forfait: '2 000 CFA/jour', frequence: 'Mensuel', prochaine: '30 Avr 2026', montant: '60 000', enRetard: false, tint: '#D2F5E8', tintText: '#00875F', totalPaye: '180 000', paiements: 3, dateDebut: '01 Jan 2026', dateFin: '31 Dec 2026', statut: 'active' },
  { id: 3, name: 'Kone Ibrahim', relation: 'Enfant', forfait: '1 000 CFA/jour', frequence: 'Mensuel', prochaine: '31 Mar 2026', montant: '30 000', enRetard: true, tint: '#FFE9CC', tintText: '#C76A00', totalPaye: '30 000', paiements: 1, dateDebut: '01 Jan 2026', dateFin: '31 Dec 2026', statut: 'en_attente' },
];

const SUIVI_MOIS = [
  { mois: 'Janvier', short: 'Jan', montant: '118 000', statut: 'paye', date: '28 Jan 2026' },
  { mois: 'Fevrier', short: 'Fev', montant: '88 000 / 118 000', statut: 'partiel', date: '27 Fev 2026' },
  { mois: 'Mars', short: 'Mar', montant: '88 000 / 118 000', statut: 'partiel', date: '31 Mar 2026' },
  { mois: 'Avril', short: 'Avr', montant: '7 000 / 118 000', statut: 'partiel', date: '05 Avr 2026' },
  { mois: 'Mai', short: 'Mai', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Juin', short: 'Juin', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Juillet', short: 'Juil', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Aout', short: 'Aout', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Septembre', short: 'Sep', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Octobre', short: 'Oct', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Novembre', short: 'Nov', montant: '118 000', statut: 'a_venir', date: '' },
  { mois: 'Decembre', short: 'Dec', montant: '118 000', statut: 'a_venir', date: '' },
];

const SUIVI_ECHEANCES_AVRIL = [
  { label: 'Sem. 1', periode: '01 - 05 Avr', alliance: 'Kone Kouadio Jean', montant: '7 000', statut: 'paye' },
  { label: 'Sem. 2', periode: '06 - 12 Avr', alliance: 'Kone Kouadio Jean', montant: '7 000', statut: 'a_venir' },
  { label: 'Sem. 3', periode: '13 - 19 Avr', alliance: 'Kone Kouadio Jean', montant: '7 000', statut: 'a_venir' },
  { label: 'Sem. 4', periode: '20 - 26 Avr', alliance: 'Kone Kouadio Jean', montant: '7 000', statut: 'a_venir' },
  { label: 'Fin de mois', periode: '30 Avr', alliance: 'Kone Amara', montant: '60 000', statut: 'a_venir' },
  { label: 'Fin de mois', periode: '30 Avr', alliance: 'Kone Ibrahim', montant: '30 000', statut: 'a_venir' },
];

const SUIVI_HISTORIQUE = [
  { periode: 'Avril 2026', paiements: [{ id: 1, name: 'Kone Kouadio Jean', type: 'Hebdomadaire', montant: '7 000', date: '05 Avr 2026', moyen: 'Wave' }] },
  { periode: 'Mars 2026', paiements: [
    { id: 2, name: 'Kone Amara', type: 'Mensuel', montant: '60 000', date: '31 Mar 2026', moyen: 'Orange Money' },
    { id: 3, name: 'Kone Kouadio Jean', type: 'Hebdomadaire', montant: '7 000', date: '29 Mar 2026', moyen: 'Cash' },
    { id: 5, name: 'Kone Kouadio Jean', type: 'Hebdomadaire', montant: '7 000', date: '22 Mar 2026', moyen: 'Wave' },
  ] },
  { periode: 'Fevrier 2026', paiements: [{ id: 6, name: 'Kone Amara', type: 'Mensuel', montant: '60 000', date: '27 Fev 2026', moyen: 'Carte bancaire' }] },
];

const state = {
  view: initialView(),
  payStep: 'form',
  onboardingIndex: 0,
  selectedEcheanceId: ECHEANCES[0].id,
  suiviTab: 'alliances',
  selectedMois: 3,
  selectedCarnetMonth: 3,
  carnetDetailsOpen: false,
  selectedAllianceId: 1,
  selectedCashAllianceId: null,
  form: {
    customerName: ECHEANCES[0].name,
    amount: String(ECHEANCES[0].montant),
    customerPhone: '',
    customerEmail: '',
    subscriptionLabel: ECHEANCES[0].sub,
    dueDate: ECHEANCES[0].date,
    impayeIds: [],
  },
  providers: [],
  providersLoading: false,
  providersError: '',
  selectedProviderId: null,
  paymentLoading: false,
  paymentError: '',
  checkReference: new URLSearchParams(location.search).get('reference') ?? '',
  checkResult: null,
  checkLoading: false,
  checkError: '',
  carnet: null,
  carnetLoading: false,
  carnetError: '',
  cashQr: null,
  cashQrLoading: false,
  cashQrError: '',
  operatorToken: '',
  operatorName: 'Operatrice',
  operatorLoading: false,
  operatorError: '',
  operatorResult: null,
};

const app = document.querySelector('#app');

function initialView() {
  const params = new URLSearchParams(location.search);
  const requested = params.get('view');
  const known = ['welcome', 'onboarding', 'home', 'pay', 'tracking', 'alliances', 'alliance-detail', 'carnet', 'cash', 'operator', 'impayes'];

  if (requested && known.includes(requested)) {
    return requested;
  }

  if (params.get('reference')) {
    return 'tracking';
  }

  return localStorage.getItem('aj:pwaStarted') === '1' ? 'home' : 'welcome';
}

function setRoute(view) {
  const url = new URL(location.href);
  url.searchParams.set('view', view);

  if (view !== 'tracking') {
    url.searchParams.delete('reference');
  }

  history.replaceState(null, '', url);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function fmt(value) {
  return Number(value).toLocaleString('fr-FR').replace(/[\u00A0\u202F]/g, ' ');
}

function edgeFunctionUrl(name) {
  return `${SUPABASE_URL}/functions/v1/${name}`;
}

async function getFunction(name, query = '') {
  const response = await fetch(`${edgeFunctionUrl(name)}${query}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || 'Service indisponible.');
  }

  return payload;
}

async function postFunction(name, body) {
  const response = await fetch(edgeFunctionUrl(name), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(body),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || 'Service indisponible.');
  }

  return payload;
}

function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function providerColor(label) {
  const value = normalize(label);
  if (value.includes('orange')) return '#ff7900';
  if (value.includes('wave')) return '#1dc8ff';
  if (value.includes('mtn')) return '#f5b700';
  if (value.includes('moov')) return '#f36b13';
  if (value.includes('ecobank')) return '#006a8e';
  if (value.includes('visa') || value.includes('card') || value.includes('carte')) return '#1a1f71';
  if (value.includes('tresor')) return '#16834a';
  return '#1b2091';
}

function providerShort(label) {
  return String(label)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function isCardProvider(provider) {
  const value = normalize(`${provider?.label ?? ''} ${provider?.method ?? ''}`);
  return value.includes('card')
    || value.includes('carte')
    || value.includes('credit')
    || value.includes('visa')
    || value.includes('mastercard')
    || value.includes('ecobank');
}

function providerRequiresPhone(provider) {
  // L'API directe PaySecureHub exige un msisdn pour le mobile money.
  // Les cartes passent par la page hebergee du hub, sans telephone.
  return !!provider && !isCardProvider(provider);
}

function providerKind(provider) {
  if (isCardProvider(provider)) return 'Carte bancaire';
  if (normalize(provider?.method).includes('mobile')) return 'Mobile Money';
  return provider?.method || 'Paiement';
}

function providerDisplayName(provider) {
  return isCardProvider(provider) ? 'Visa & Master Card' : provider.label;
}

function shouldShowProvider(provider) {
  const value = normalize(`${provider?.label ?? ''} ${provider?.method ?? ''}`);
  return !value.includes('ecobank') && !value.includes('tresor');
}

function providerPhoneLabel(label) {
  const value = normalize(label);
  if (value.includes('wave')) return 'Votre numéro Wave';
  if (value.includes('orange')) return 'Votre numéro Orange Money';
  if (value.includes('mtn')) return 'Votre numéro MTN Money';
  if (value.includes('moov')) return 'Votre numéro Moov Money';
  if (value.includes('visa') || value.includes('card') || value.includes('carte') || value.includes('ecobank')) {
    return 'Votre numéro de téléphone';
  }
  return `Votre numéro ${label}`;
}

function providerLogo(label) {
  const value = normalize(label);
  if (value.includes('orange')) return './assets/orange-money-logo.png';
  if (value.includes('wave')) return './assets/wave-logo.jpeg';
  if (value.includes('mtn')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/250px-MTN_Logo.svg.png';
  if (value.includes('moov')) return './assets/moov-money-logo.png';
  if (value.includes('ecobank')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ecobank_Logo.svg/500px-Ecobank_Logo.svg.png';
  if (value.includes('tresor')) return 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a7/7f/cd/a77fcda6-07d0-4767-d581-48c12be4768f/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg';
  if (value.includes('visa') || value.includes('card')) return './assets/logos-de-visa-et-mastercard-102631953.webp';
  return '';
}

function providerRank(label) {
  const value = normalize(label);
  const index = PAYMENT_ORDER.findIndex((entry) => value.includes(entry));
  return index === -1 ? 50 : index;
}

function sortProviders(providers) {
  return [...providers].sort((a, b) => {
    const rank = providerRank(a.label) - providerRank(b.label);
    return rank || String(a.label).localeCompare(String(b.label));
  });
}

function selectedEcheance() {
  return ECHEANCES.find((echeance) => echeance.id === state.selectedEcheanceId) ?? ECHEANCES[0];
}

function mainAlliance() {
  return SUIVI_ALLIANCES.find((alliance) => alliance.relation === 'Moi-meme') ?? SUIVI_ALLIANCES[0];
}

function paymentFrequencyLabel(frequency) {
  const value = normalize(frequency);
  if (value.includes('mensuel')) return 'Paiement par mois';
  if (value.includes('journalier')) return 'Paiement par jour';
  if (value.includes('hebdomadaire')) return 'Paiement hebdomadaire';
  return `Paiement ${frequency || ''}`.trim();
}

function totalImpayes() {
  return IMPAYES.reduce((sum, item) => sum + item.montantDu, 0);
}

function retardMax() {
  return Math.max(...IMPAYES.map((item) => item.joursRetard));
}

function impayeSummary(items) {
  if (items.length === 1) {
    const item = items[0];
    return {
      customerName: item.beneficiaire,
      subscriptionLabel: `${item.lien} • ${item.frequence}`,
      dueDate: item.dateEcheance,
      description: `${item.beneficiaire} - ${item.moisConcerne}`,
    };
  }

  return {
    customerName: `${items.length} alliances impayées`,
    subscriptionLabel: `${items.length} alliances impayées`,
    dueDate: items.map((item) => item.dateEcheance).join(', '),
    description: `${items.length} alliances impayées`,
  };
}

function payImpayes(items) {
  if (!items.length) return;

  const summary = impayeSummary(items);
  state.form.customerName = summary.customerName;
  state.form.amount = String(items.reduce((sum, item) => sum + item.montantDu, 0));
  state.form.subscriptionLabel = summary.subscriptionLabel;
  state.form.dueDate = summary.dueDate;
  state.form.impayeIds = items.map((item) => item.id);
  state.paymentError = '';
  state.payStep = 'method';
  state.view = 'pay';
  setRoute('pay');
  render();
}

function applyEcheanceToForm(echeance) {
  state.selectedEcheanceId = echeance.id;
  state.form.customerName = echeance.name;
  state.form.amount = String(echeance.montant);
  state.form.subscriptionLabel = echeance.sub;
  state.form.dueDate = echeance.date;
  state.form.impayeIds = [];
}

function selectCashAllianceFromPayment() {
  const targetName = normalize(state.form.customerName || selectedEcheance().name);
  const alliances = state.carnet?.alliances ?? [];
  const alliance = alliances.find((item) => normalize(item.beneficiary_name) === targetName)
    ?? alliances.find((item) => targetName.includes(normalize(item.beneficiary_name)));

  if (alliance?.id) {
    state.selectedCashAllianceId = alliance.id;
    state.cashQr = null;
  }
}

async function openCashQrForCurrentPayment() {
  state.view = 'cash';
  setRoute('cash');
  render();
  await loadCarnet();
  selectCashAllianceFromPayment();
  loadCashQr(true);
}

function initials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function suiviStatus(status) {
  const value = status === 'paid' ? 'paye'
    : status === 'partial' ? 'partiel'
      : status === 'late' ? 'impaye'
        : status === 'due' ? 'a_venir'
          : status;

  if (value === 'paye') return { color: '#00875F', bg: '#C9F2E4', label: 'Paye', cellBg: '#00A876', cellFg: '#FFFFFF' };
  if (value === 'partiel') return { color: '#C76A00', bg: '#FFE3C2', label: 'Partiel', cellBg: '#F08A1D', cellFg: '#FFFFFF' };
  if (value === 'impaye' || value === 'en_attente') return { color: '#D32F2F', bg: '#FFD2D4', label: 'Impayé', cellBg: '#FF4D4F', cellFg: '#FFFFFF' };
  return { color: '#5A5F7D', bg: '#E6E8F2', label: 'A venir', cellBg: '#FFFFFF', cellFg: '#8E92AB' };
}

async function loadProviders(force = false) {
  if ((state.providers.length || state.providersLoading) && !force) return;

  state.providersLoading = true;
  state.providersError = '';
  render();

  try {
    const payload = await getFunction('payment-providers', '?country=CI&currency=XOF');
    state.providers = sortProviders((payload.providers || []).filter(shouldShowProvider));
    state.selectedProviderId = state.providers.some((provider) => String(provider.service_id) === String(state.selectedProviderId))
      ? state.selectedProviderId
      : null;
  } catch (error) {
    state.providersError = error instanceof Error ? error.message : 'Impossible de charger les moyens de paiement.';
  } finally {
    state.providersLoading = false;
    render();
  }
}

function fallbackCarnet() {
  const alliances = SUIVI_ALLIANCES.map((alliance) => ({
    id: `demo-${alliance.id}`,
    qr_code: `AJ-DEMO-${String(alliance.id).padStart(3, '0')}`,
    beneficiary_name: alliance.name,
    relation: alliance.relation,
    daily_amount: Number(alliance.forfait.replace(/[^\d]/g, '')) || 1000,
    frequency: alliance.frequence,
    currency: 'XOF',
  }));

  const months = SUIVI_MOIS.map((month, index) => {
    const items = index === 3 ? SUIVI_ECHEANCES_AVRIL.map((item, itemIndex) => ({
      id: `demo-avr-${itemIndex}`,
      alliance_id: alliances.find((alliance) => alliance.beneficiary_name === item.alliance)?.id,
      alliance_name: item.alliance,
      label: item.label,
      period_label: item.periode,
      due_date: item.periode,
      amount: Number(item.montant.replace(/[^\d]/g, '')),
      currency: 'XOF',
      status: item.statut === 'paye' ? 'paid' : item.statut === 'impaye' ? 'late' : 'due',
      payment_method: item.statut === 'paye' ? 'Wave' : '',
    })) : [];

    return {
      period_month: `2026-${String(index + 1).padStart(2, '0')}-01`,
      mois: `${month.mois} 2026`,
      short: month.short,
      amount_label: month.montant,
      statut: month.statut,
      items,
    };
  });

  return {
    alliances,
    due_items: months.flatMap((month) => month.items),
    months,
  };
}

function carnetData() {
  if (state.carnet?.months?.length) {
    return state.carnet;
  }

  return fallbackCarnet();
}

function carnetAllianceName(allianceId, fallback = 'Mon Alliance') {
  const data = carnetData();
  return data.alliances?.find((alliance) => String(alliance.id) === String(allianceId))?.beneficiary_name
    ?? fallback;
}

function amountLabel(value, currency = 'CFA') {
  const unit = currency === 'XOF' ? 'CFA' : currency;

  if (typeof value === 'string') {
    if (value.includes('/')) {
      const [paid, total] = value.split('/');
      const paidValue = Number(String(paid).replace(/[^\d]/g, ''));
      const totalValue = Number(String(total).replace(/[^\d]/g, ''));

      if (Number.isFinite(paidValue) && Number.isFinite(totalValue)) {
        return `${fmt(paidValue)} / ${fmt(totalValue)} ${unit}`;
      }
    }

    return value.includes('CFA') || value.includes('XOF')
      ? value.replace(/\bXOF\b/g, 'CFA')
      : `${value} ${unit}`;
  }

  return `${fmt(Number(value || 0))} ${unit}`;
}

async function loadCarnet(force = false) {
  if ((state.carnet || state.carnetLoading) && !force) return;

  state.carnetLoading = true;
  state.carnetError = '';
  render();

  try {
    state.carnet = await getFunction('get-carnet');
    const monthCount = state.carnet?.months?.length ?? 0;
    if (monthCount && state.selectedCarnetMonth > monthCount - 1) {
      state.selectedCarnetMonth = monthCount - 1;
    }
  } catch (error) {
    state.carnetError = error instanceof Error ? error.message : 'Impossible de charger le carnet.';
    if (!state.carnet) {
      state.carnet = fallbackCarnet();
    }
  } finally {
    state.carnetLoading = false;
    render();
  }
}

async function loadCashQr(force = false) {
  if ((state.cashQr || state.cashQrLoading) && !force) return;

  state.cashQrLoading = true;
  state.cashQrError = '';
  render();

  try {
    const payload = state.selectedCashAllianceId ? { allianceId: state.selectedCashAllianceId } : {};
    state.cashQr = await postFunction('get-cash-qr', payload);
    state.selectedCashAllianceId = state.cashQr?.alliance?.id ?? state.selectedCashAllianceId;
  } catch (error) {
    state.cashQrError = error instanceof Error ? error.message : 'Impossible de créer le QR code.';
  } finally {
    state.cashQrLoading = false;
    render();
  }
}

function topbar(title, eyebrow = 'Alliance Journaliere', className = '') {
  return `
    <header class="app-header ${escapeHtml(className)}">
      <div class="page-header">
        <button class="back-button" data-view="home" type="button" aria-label="Retour">‹</button>
        <h1 class="page-title">${escapeHtml(title)}</h1>
        <div class="header-spacer"></div>
      </div>
    </header>
  `;
}

function nav() {
  return '';
}

function uiIcon(name) {
  const icons = {
    bell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 17H9"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 7v6"/><path d="M12 17h.01"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>',
    plusCircle: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>',
    smartphone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
    qr: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3"/><path d="M21 14v7h-7"/><path d="M17 17h4"/></svg>',
  };

  return icons[name] ?? '';
}

function renderWelcome() {
  return `
    <main class="welcome-screen">
      <div class="welcome-brand">
        <span>Alliance Journaliere</span>
      </div>
      <section class="welcome-copy">
        <h1>Votre alliance, suivie simplement</h1>
        <p>Gerez vos engagements, vos proches et vos paiements depuis un seul espace.</p>
        <div class="welcome-actions">
          <button class="primary-button" data-view="onboarding" type="button">Commencer →</button>
          <button class="secondary-button" data-start type="button">Se connecter</button>
        </div>
      </section>
    </main>
  `;
}

function renderOnboarding() {
  const slide = ONBOARDING_SLIDES[state.onboardingIndex];

  return `
    <main class="onboarding-screen">
      <section class="onboarding-blue">
        <div class="onboarding-safe">
          <div class="visual-wrap">
            ${renderOnboardingVisual(slide.visual)}
          </div>
        </div>
      </section>

      <section class="onboarding-white">
        <h1>${escapeHtml(slide.title)}</h1>
        <p>${escapeHtml(slide.description)}</p>
      </section>

      <section class="onboarding-bottom">
        <div class="dots">
          ${ONBOARDING_SLIDES.map((_, index) => `
            <button class="dot ${state.onboardingIndex === index ? 'dot-active' : ''}" data-onboarding-dot="${index}" type="button" aria-label="Slide ${index + 1}"></button>
          `).join('')}
        </div>
        <button class="next-button" data-onboarding-next type="button">
          ${state.onboardingIndex === ONBOARDING_SLIDES.length - 1 ? 'Commencer' : 'Suivant'}
        </button>
        <button class="signin-link" data-start type="button">Se connecter a mon compte</button>
      </section>
    </main>
  `;
}

function renderOnboardingVisual(visual) {
  if (visual === 'family') {
    return `
      <article class="illustration-card">
        <div class="illustration-header">
          <span class="icon-badge">P</span>
          <span>
            <span class="card-eyebrow">Proches</span>
            <strong class="card-title">Un suivi par personne</strong>
          </span>
        </div>
        <div class="family-total-card">
          <span>Total des alliances</span>
          <strong>84 000 CFA</strong>
        </div>
        ${[
          ['Moi-meme', 'Hebdomadaire', '7 000', 'Actif', '#1B2091'],
          ['Conjoint(e)', 'Mensuel', '60 000', 'À jour', '#00D9A6'],
          ['Enfant', 'Mensuel', '30 000', 'Suivi', '#1B2091'],
        ].map(([name, role, amount, status, color]) => `
          <div class="family-item">
            <span class="family-avatar" style="background:${color};">•</span>
            <span class="family-info">
              <strong>${name}</strong>
              <span>${role}</span>
            </span>
            <span class="family-amount">
              <strong>${amount}</strong>
              <span>${status}</span>
            </span>
          </div>
        `).join('')}
      </article>
    `;
  }

  if (visual === 'notifications') {
    return `
      <article class="illustration-card notification-card">
        <div class="bell-wrap">
          <span class="bell-halo"></span>
          <span class="bell-circle">!</span>
        </div>
        ${[
          ['Paiement recu', 'Maintenant'],
          ['Echeance demain', 'Rappel'],
          ['Retard detecte', 'Action'],
        ].map(([title, meta]) => `
          <div class="notification-row">
            <span class="notification-icon">✓</span>
            <strong>${title}</strong>
            <span>${meta}</span>
          </div>
        `).join('')}
      </article>
    `;
  }

  return `
    <article class="illustration-card">
      <div class="illustration-header">
        <span class="icon-badge">W</span>
        <span>
          <span class="card-eyebrow">Mon Alliance</span>
          <strong class="card-title">Avancement mensuel</strong>
        </span>
      </div>
      <div class="amount-band">
        <span>Collecte</span>
        <strong>248 000 CFA</strong>
      </div>
      <div class="progress-track">
        <span class="progress-fill"></span>
      </div>
      <div class="row-grid">
        <span><i style="background:#00C48C;"></i>Paye</span>
        <span><i style="background:#00D9A6;"></i>A venir</span>
        <span><i style="background:#FF4D4F;"></i>Retard</span>
      </div>
    </article>
  `;
}

function renderHome() {
  const alliance = mainAlliance();
  const impayesCount = IMPAYES.length;
  const hasImpayes = impayesCount > 0;

  return `
    <main class="screen">
      <section class="app-header home-header">
        <div class="header-top">
          <button class="user-info" data-view="alliances" type="button">
            <span class="avatar">J</span>
            <span>
              <strong class="user-name">Kone Kouadio Jean</strong>
            </span>
          </button>
          <button class="notif-button" data-view="tracking" type="button" aria-label="Notifications">
            ${uiIcon('bell')}
            <span class="notif-badge"></span>
          </button>
        </div>

        <div class="alliance-card">
          <div class="alliance-card-head">
            <div class="alliance-title-group">
              <p>Mon alliance journalière</p>
              <strong>${escapeHtml(alliance.forfait)}</strong>
            </div>
            <button class="${hasImpayes ? 'late-chip' : 'ok-chip'}" data-view="impayes" type="button">
              ${hasImpayes ? `${impayesCount} impayé${impayesCount > 1 ? 's' : ''}` : 'À jour'}
            </button>
          </div>

          <div class="alliance-meta-panel">
            <div class="alliance-meta-line">
              <span>${escapeHtml(paymentFrequencyLabel(alliance.frequence))}</span>
              <strong>${amountLabel(alliance.montant)}</strong>
            </div>
            <div class="alliance-meta-line">
              <span>Prochain paiement</span>
              <strong>${escapeHtml(alliance.prochaine)}</strong>
            </div>
          </div>

          <div class="alliance-divider"></div>

          <div class="button-row">
            <button class="pay-button" data-view="pay" type="button">Payer maintenant</button>
            <button class="qr-button" data-view="cash" type="button">Mon QR code</button>
          </div>
        </div>

        <div class="quick-actions">
          <button class="quick-action" data-view="alliances" type="button">
            <span class="quick-action-icon">${uiIcon('heart')}</span>
            <span>Mon alliance</span>
          </button>
          <button class="quick-action" data-view="impayes" type="button">
            <span class="quick-action-icon" style="color:#FF4D4F;">${uiIcon('alert')}</span>
            <span>Impayes</span>
          </button>
          <button class="quick-action" data-view="carnet" type="button">
            <span class="quick-action-icon" style="color:#F08A1D;">${uiIcon('calendar')}</span>
            <span>Mon carnet</span>
          </button>
          <button class="quick-action" data-view="alliances" type="button">
            <span class="quick-action-icon" style="color:#00A876;">${uiIcon('plusCircle')}</span>
            <span>Souscrire</span>
          </button>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">Mon activite</h2>
          <button class="see-all" data-view="tracking" type="button">Voir Tout</button>
        </div>
        <div class="payment-list">
          ${timelineItem('Kone Kouadio Jean', 'Hebdomadaire', '12 Avr 2026', '7 000 CFA', 'a payer', '#F08A1D')}
          ${timelineItem('Kone Ibrahim', 'Mensuel', '30 Avr 2026', '30 000 CFA', 'a payer', '#F08A1D')}
          ${timelineItem('Kone Amara', 'Mensuel', '30 Avr 2026', '60 000 CFA', 'a payer', '#F08A1D')}
          ${timelineItem('Kone Kouadio Jean', 'Hebdomadaire • Wave', '05 Avr 2026', '7 000 CFA', 'paye', '#00A876')}
          ${timelineItem('Kone Amara', 'Mensuel • Orange Money', '31 Mar 2026', '60 000 CFA', 'paye', '#00A876')}
        </div>

        <button class="proche-card" data-view="alliances" type="button">
          <span class="proche-icon">P</span>
          <span class="payment-info">
            <strong class="proche-title">Souscrire pour un proche</strong>
            <span class="proche-desc">Conjoint, enfant, parent... gerez leurs alliances depuis votre compte</span>
          </span>
          <span style="color:#1B2091;">›</span>
        </button>
      </section>
    </main>
  `;
}

function timelineItem(name, type, date, amount, status, color) {
  return `
    <button class="payment-item" data-view="${status.includes('payer') ? 'pay' : 'tracking'}" type="button">
      <span class="payment-bar" style="background:${color};"></span>
      <span class="payment-info">
        <strong class="payment-title">${escapeHtml(name)}</strong>
        <span class="payment-subtitle">${escapeHtml(type)}</span>
        <span class="payment-date">${escapeHtml(date)}</span>
      </span>
      <span class="payment-right">
        <strong class="payment-amount">${escapeHtml(amount)}</strong>
        <span class="payment-hint" style="color:${status.includes('payer') ? '#C76A00' : '#00875F'};">${escapeHtml(status)}</span>
      </span>
      <span style="color:#4A4D63;">›</span>
    </button>
  `;
}

function renderPay() {
  if (state.payStep === 'method') {
    return renderPaymentMethod();
  }

  if (state.payStep === 'providers') {
    return renderProviders();
  }

  const echeance = selectedEcheance();

  return `
    <main class="screen">
      ${topbar('Payer ma contribution', 'Paiement')}
      <section class="page-body">
        <h2 class="section-title">Échéance à payer</h2>
        <div class="echeance-list">
          ${ECHEANCES.map(renderEcheanceCard).join('')}
        </div>

        <div class="provider-info">
          <span class="provider-info-icon">✓</span>
          <p class="provider-info-text">Vous choisirez ensuite entre paiement en ligne et paiement en espèces.</p>
        </div>
      </section>

      <section class="bottom-action">
        <div class="total-row">
          <span class="total-label">Montant à payer</span>
          <strong class="total-value">${fmt(echeance.montant)} CFA</strong>
        </div>
        <button class="primary-button" data-go-payment-method type="button">Payer →</button>
      </section>
    </main>
  `;
}

function renderPaymentMethod() {
  const amount = Number(state.form.amount || 0);

  return `
    <main class="screen">
      ${topbar('Type de paiement', 'Paiement')}
      <section class="page-body">
        <div class="summary-card">
          <span class="summary-info">
            <span class="summary-label">Contribution</span>
            <strong class="summary-name">${escapeHtml(state.form.customerName || 'Client Alliance')}</strong>
            <span class="summary-sub">${escapeHtml(state.form.subscriptionLabel || 'Mon Alliance')} • ${escapeHtml(state.form.dueDate || '')}</span>
          </span>
          <strong class="summary-amount">${fmt(amount)} CFA</strong>
        </div>

        <div class="section-header" style="margin-top:20px;">
          <h2 class="section-title">Choisir le paiement</h2>
          <button class="link-button" data-back-payment type="button">Retour</button>
        </div>

        <div class="payment-type-list">
          <button class="payment-type-card" data-pay-online type="button">
            <span class="payment-type-icon is-online">${uiIcon('smartphone')}</span>
            <span class="payment-type-text">
              <strong>En ligne</strong>
              <span>Mobile Money, Visa & Master Card</span>
            </span>
            <span class="payment-type-arrow">›</span>
          </button>

          <button class="payment-type-card" data-pay-cash type="button">
            <span class="payment-type-icon is-cash">${uiIcon('qr')}</span>
            <span class="payment-type-text">
              <strong>En espèces</strong>
              <span>Afficher mon QR code pour l’opératrice</span>
            </span>
            <span class="payment-type-arrow">›</span>
          </button>
        </div>
      </section>
    </main>
  `;
}

function renderEcheanceCard(echeance) {
  const selected = echeance.id === state.selectedEcheanceId;

  return `
    <button class="echeance-card ${selected ? 'is-selected' : ''}" data-echeance-id="${echeance.id}" type="button">
      <span class="echeance-info">
        <strong class="echeance-name">${escapeHtml(echeance.name)}</strong>
        <span class="echeance-sub">${escapeHtml(echeance.sub)}</span>
        <span class="echeance-card-date">${escapeHtml(echeance.date)}</span>
      </span>
      <span class="echeance-card-side">
        <strong class="echeance-card-amount">${fmt(echeance.montant)} CFA</strong>
        ${echeance.enRetard ? '<span class="retard-hint">en retard</span>' : ''}
      </span>
      ${selected ? '<span class="selected-check">✓</span>' : ''}
    </button>
  `;
}

function renderProviders() {
  const amount = Number(state.form.amount || 0);

  return `
    <main class="screen">
      ${topbar('Moyen de paiement', 'Paiement')}
      <section class="page-body">
        <div class="summary-card">
          <span class="summary-info">
            <span class="summary-label">Contribution</span>
            <strong class="summary-name">${escapeHtml(state.form.customerName || 'Client Alliance')}</strong>
            <span class="summary-sub">${escapeHtml(state.form.subscriptionLabel || 'Mon Alliance')} • ${escapeHtml(state.form.dueDate || '')}</span>
          </span>
          <strong class="summary-amount">${fmt(amount)} CFA</strong>
        </div>

        <div class="section-header" style="margin-top:20px;">
          <h2 class="section-title">Choisir un moyen</h2>
          <button class="link-button" data-back-payment type="button">Retour</button>
        </div>
        <div class="content-stack">
          ${providersContent()}
        </div>
      </section>
    </main>
  `;
}

function providersContent() {
  if (state.providersLoading) {
    return '<div class="loading-card"><span class="loading-spinner"></span><span>Chargement des moyens...</span></div>';
  }

  if (state.providersError) {
    return `
      <div class="error">${escapeHtml(state.providersError)}</div>
      <button class="secondary-button" data-reload-providers type="button">Réessayer</button>
    `;
  }

  if (!state.providers.length) {
    return '<div class="notice">Aucun moyen de paiement disponible pour le moment.</div>';
  }

  return `
    <div class="provider-list">
      ${state.providers.map(renderProvider).join('')}
    </div>
  `;
}

function renderProvider(provider) {
  const selected = String(state.selectedProviderId) === String(provider.service_id);
  const color = providerColor(provider.label);
  const logo = providerLogo(provider.label);
  const requiresPhone = providerRequiresPhone(provider);
  const card = isCardProvider(provider);
  const moov = normalize(provider.label).includes('moov');
  const orange = normalize(provider.label).includes('orange');
  const wave = normalize(provider.label).includes('wave');
  const logoBackground = card ? '#F2F4F7' : moov ? '#0057B8' : orange ? '#FF7900' : wave ? '#4AC7E9' : color;
  const logoClass = [
    moov ? 'is-moov' : '',
    orange ? 'is-orange' : '',
    wave ? 'is-wave' : '',
  ].filter(Boolean).join(' ');

  return `
    <article class="provider-card ${selected ? 'is-selected' : ''}" data-provider-id="${escapeHtml(provider.service_id)}">
      <button class="provider-main" data-provider-pick="${escapeHtml(provider.service_id)}" type="button">
        <span class="provider-logo ${logoClass}" style="background:${logoBackground};">
          ${logo ? `<img src="${escapeHtml(logo)}" alt="" loading="lazy" />` : providerShort(provider.label)}
        </span>
        <span class="provider-text">
          <strong class="provider-name">${escapeHtml(providerDisplayName(provider))}</strong>
          <span>${escapeHtml(providerKind(provider))}</span>
        </span>
        <span class="provider-check">✓</span>
      </button>
      ${selected ? renderProviderExtra(provider, requiresPhone, card) : ''}
    </article>
  `;
}

function renderProviderExtra(provider, requiresPhone, card) {
  const isOrange = normalize(provider.label).includes('orange');

  if (card) {
    return `
      <div class="provider-extra">
        <p class="card-notice-text">Les informations de carte seront saisies sur la page sécurisée PaySecureHub.</p>
        ${state.paymentError ? `<div class="error">${escapeHtml(state.paymentError)}</div>` : ''}
        <button class="primary-button" data-pay-provider="${escapeHtml(provider.service_id)}" type="button" ${state.paymentLoading ? 'disabled' : ''}>
          ${state.paymentLoading ? 'Création du lien...' : 'Continuer →'}
        </button>
      </div>
    `;
  }

  if (requiresPhone) {
    return `
      <div class="provider-extra">
        <div class="field">
          <label for="provider-phone-${escapeHtml(provider.service_id)}">${escapeHtml(providerPhoneLabel(provider.label))}</label>
          <div class="phone-card">
            <span class="phone-prefix">+225</span>
            <input id="provider-phone-${escapeHtml(provider.service_id)}" data-provider-phone inputmode="tel" autocomplete="tel" placeholder="0700000000" />
          </div>
        </div>
        ${isOrange ? `
          <div class="field">
            <label for="orange-otp-${escapeHtml(provider.service_id)}">Code OTP Orange (obligatoire)</label>
            <input id="orange-otp-${escapeHtml(provider.service_id)}" data-orange-otp inputmode="numeric" autocomplete="one-time-code" placeholder="Composez #144*82# pour l'obtenir" />
          </div>
        ` : ''}
        ${state.paymentError ? `<div class="error">${escapeHtml(state.paymentError)}</div>` : ''}
        <button class="primary-button" data-pay-provider="${escapeHtml(provider.service_id)}" type="button" ${state.paymentLoading ? 'disabled' : ''}>
          ${state.paymentLoading ? 'Création du lien...' : 'Continuer →'}
        </button>
      </div>
    `;
  }

  return `
    <div class="provider-extra">
      ${state.paymentError ? `<div class="error">${escapeHtml(state.paymentError)}</div>` : ''}
      <button class="primary-button" data-pay-provider="${escapeHtml(provider.service_id)}" type="button" ${state.paymentLoading ? 'disabled' : ''}>
        ${state.paymentLoading ? 'Création du lien...' : 'Continuer →'}
      </button>
    </div>
  `;
}

function renderTracking() {
  return `
    <main class="screen">
      ${topbar('Suivi paiement', 'Reference')}
      <section class="page-body content-stack">
        <section class="form-panel">
          <form class="form-grid" id="check-form">
            <div class="field">
              <label for="reference">Reference paiement</label>
              <input id="reference" name="reference" autocomplete="off" value="${escapeHtml(state.checkReference)}" placeholder="AJ-..." required />
            </div>
            ${state.checkError ? `<div class="error">${escapeHtml(state.checkError)}</div>` : ''}
            <button class="primary-button" type="submit">${state.checkLoading ? 'Verification...' : 'Verifier'}</button>
          </form>
        </section>
        ${state.checkResult ? renderCheckResult() : ''}
      </section>
    </main>
  `;
}

function renderCheckResult() {
  const payment = state.checkResult;
  const failed = ['failed', 'cancelled', 'expired'].includes(payment.status);
  const statusClass = payment.status === 'succeeded' ? 'success' : failed ? 'error' : 'notice';
  const waiting = !failed && payment.status !== 'succeeded';

  return `
    <section class="status-panel">
      <div class="${statusClass}">Statut : ${escapeHtml(payment.status)}</div>
      ${waiting ? '<p class="provider-info-text">Confirmez le paiement sur votre téléphone. Le statut se met à jour automatiquement.</p>' : ''}
      <div class="status-line"><span>Reference</span><strong>${escapeHtml(payment.reference)}</strong></div>
      <div class="status-line"><span>Montant</span><strong>${fmt(payment.amount)} ${escapeHtml(payment.currency)}</strong></div>
      <div class="status-line"><span>Moyen</span><strong>${escapeHtml(payment.payment_method || 'PaySecureHub')}</strong></div>
      <div class="status-line"><span>Alliance</span><strong>${escapeHtml(payment.subscription_label || payment.alliance_name || 'Mon Alliance')}</strong></div>
    </section>
  `;
}

function renderImpayes() {
  return `
    <main class="screen impayes-screen">
      <section class="app-header impayes-header">
        <div class="page-header">
          <button class="back-button" data-view="home" type="button" aria-label="Retour">‹</button>
          <h1 class="page-title">Alliances impayées</h1>
          <div class="header-spacer"></div>
        </div>

        <div class="impayes-total-card">
          <span class="impayes-total-icon">${uiIcon('alert')}</span>
          <span class="impayes-total-copy">
            <span>Montant total dû</span>
            <strong>${fmt(totalImpayes())} CFA</strong>
            <small>${IMPAYES.length} impayé${IMPAYES.length > 1 ? 's' : ''} • jusqu'à ${retardMax()} jours de retard</small>
          </span>
        </div>
      </section>

      <section class="impayes-body">
        <div class="impayes-list">
          ${IMPAYES.map(renderImpayeCard).join('')}
        </div>
      </section>

      <section class="impayes-bottom">
        <div class="total-row">
          <span class="total-label">Total du</span>
          <strong class="impayes-bottom-total">${fmt(totalImpayes())} CFA</strong>
        </div>
        <button class="primary-button" data-pay-all-impayes type="button">Tout payer →</button>
      </section>
    </main>
  `;
}

function renderImpayeCard(impaye) {
  return `
    <article class="impaye-card">
      <span class="impaye-card-top">
        <span class="impaye-avatar">${initials(impaye.beneficiaire)}</span>
        <span class="impaye-main">
          <strong>${escapeHtml(impaye.beneficiaire)}</strong>
          <small>${escapeHtml(impaye.lien)} • ${escapeHtml(impaye.frequence)}</small>
          <em>${escapeHtml(impaye.moisConcerne)}</em>
        </span>
        <span class="impaye-amount">${fmt(impaye.montantDu)} CFA</span>
        <span class="impaye-arrow">›</span>
      </span>

      <span class="impaye-divider"></span>

      <span class="impaye-card-bottom">
        <span>Paiement du : ${escapeHtml(impaye.dateEcheance)}</span>
        <strong><i></i>${impaye.joursRetard} jours de retard</strong>
      </span>

      <button class="impaye-pay-now" data-pay-impaye="${impaye.id}" type="button">Payer Maintenant</button>
    </article>
  `;
}

function carnetMonthNumbers(month) {
  const items = month?.items ?? [];
  const itemTotal = items.reduce((sum, item) => sum + Number(item.amount ?? 0), 0);
  const itemPaid = items
    .filter((item) => item.status === 'paid')
    .reduce((sum, item) => sum + Number(item.amount ?? 0), 0);
  const total = Number(month?.total ?? itemTotal ?? 0);
  const paid = Number(month?.paid ?? itemPaid ?? 0);
  const paidCount = items.filter((item) => item.status === 'paid').length;
  const totalCount = items.length;

  return {
    total,
    paid,
    remaining: Math.max(total - paid, 0),
    paidCount,
    totalCount,
    progress: total > 0 ? Math.min(100, Math.round((paid / total) * 100)) : 0,
  };
}

function carnetStatusClass(status) {
  if (status === 'paid' || status === 'paye') return 'is-paid';
  if (status === 'partial' || status === 'partiel') return 'is-partial';
  if (status === 'late' || status === 'impaye' || status === 'en_attente') return 'is-late';
  return 'is-due';
}

function carnetItemDay(item) {
  const value = `${item?.due_date ?? ''} ${item?.period_label ?? ''}`;
  const match = value.match(/\b([0-3]?\d)\b/);
  const day = Number(match?.[1] ?? 1);

  return Number.isFinite(day) && day >= 1 && day <= 31 ? day : 1;
}

function calendarMeta(periodMonth) {
  const [yearValue, monthValue] = String(periodMonth || '2026-04-01').split('-').map(Number);
  const year = Number.isFinite(yearValue) ? yearValue : 2026;
  const month = Number.isFinite(monthValue) ? monthValue : 4;
  const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const firstDay = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const mondayOffset = (firstDay + 6) % 7;

  return { days, mondayOffset };
}

function renderCarnet() {
  const data = carnetData();
  const months = data.months ?? [];
  const selectedMonth = months[state.selectedCarnetMonth] ?? months[0];
  const selectedStatus = suiviStatus(selectedMonth?.statut);
  const stats = carnetMonthNumbers(selectedMonth);
  const selectedItems = selectedMonth?.items ?? [];

  return `
    <main class="screen">
      ${topbar('Mon carnet', 'Paiements')}
      <section class="page-body content-stack">
        ${state.carnetLoading && state.carnet ? '<div class="loading-card"><span class="loading-spinner"></span><span>Actualisation du carnet...</span></div>' : ''}
        ${state.carnetError ? `<div class="notice">${escapeHtml(state.carnetError)} Affichage de la demo locale.</div>` : ''}

        <div class="carnet-summary">
          <span>
            <span class="summary-label">Source du carnet</span>
            <strong>Paiements en ligne et cash</strong>
          </span>
          <button class="link-button" data-refresh-carnet type="button">Actualiser</button>
        </div>

        <div class="mois-grid">
          ${months.map((month, index) => {
            const status = suiviStatus(month.statut);
            const selected = state.selectedCarnetMonth === index;
            return `
              <button
                class="mois-cell ${month.statut === 'a_venir' ? 'is-future' : ''} ${selected ? 'is-selected' : ''}"
                style="background:${status.cellBg}; color:${status.cellFg};"
                data-carnet-month="${index}"
                type="button"
              >
                ${escapeHtml(month.short)}
              </button>
            `;
          }).join('')}
        </div>

        <div class="legende">
          ${[
            ['#00A876', 'Paye'],
            ['#F08A1D', 'Partiel'],
            ['#FF4D4F', 'Impaye'],
            ['#8E92AB', 'A venir'],
          ].map(([color, label]) => `
            <span><i style="background:${color};"></i>${label}</span>
          `).join('')}
        </div>

        ${selectedMonth ? `
          <div class="detail-card">
            <div class="detail-header">
              <strong>${escapeHtml(selectedMonth.mois)}</strong>
              <span class="detail-badge" style="background:${selectedStatus.bg}; color:${selectedStatus.color};">${selectedStatus.label}</span>
            </div>
            <span class="suivi-card-divider"></span>
            <div class="detail-line">
              <span>Montant</span>
              <strong>${escapeHtml(amountLabel(selectedMonth.amount_label ?? selectedMonth.total))}</strong>
            </div>
            <div class="detail-line">
              <span>Paye ce mois</span>
              <strong style="color:${selectedStatus.color};">${amountLabel(stats.paid)}</strong>
            </div>
            <div class="detail-line">
              <span>Echeances</span>
              <strong>${stats.paidCount}/${stats.totalCount}</strong>
            </div>
            <button class="secondary-button details-toggle-button" data-toggle-carnet-details type="button">
              ${state.carnetDetailsOpen ? 'Masquer les details' : 'Voir les details'}
            </button>
          </div>

          ${state.carnetDetailsOpen ? renderCarnetPaymentList(selectedMonth) : ''}

          <button class="primary-button" data-view="cash" type="button">Afficher mon QR cash</button>
        ` : '<div class="notice">Aucun mois disponible dans le carnet.</div>'}
      </section>
    </main>
  `;
}

function renderCarnetCalendar(month) {
  const items = month.items ?? [];
  const meta = calendarMeta(month.period_month);
  const days = Array.from({ length: meta.days }, (_, index) => index + 1);
  const blanks = Array.from({ length: meta.mondayOffset }, (_, index) => index);
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return `
    <section class="carnet-calendar-panel">
      <div class="carnet-calendar-header">
        <span>
          <strong>Calendrier du mois</strong>
          <small>${escapeHtml(month.mois)}</small>
        </span>
      </div>

      <div class="carnet-calendar-weekdays">
        ${weekDays.map((day) => `<span>${day}</span>`).join('')}
      </div>

      <div class="carnet-calendar-grid">
        ${blanks.map(() => '<span class="calendar-empty"></span>').join('')}
        ${days.map((day) => renderCarnetCalendarDay(day, items)).join('')}
      </div>
    </section>
  `;
}

function renderCarnetCalendarDay(day, items) {
  const dayItems = items.filter((item) => carnetItemDay(item) === day);
  const mainItem = dayItems[0];
  const status = mainItem ? suiviStatus(mainItem.status) : null;
  const dayClass = mainItem ? carnetStatusClass(mainItem.status) : '';

  return `
    <article class="carnet-calendar-day ${dayClass}">
      <strong>${day}</strong>
      ${mainItem ? `
        <span style="background:${status.bg}; color:${status.color};">${status.label}</span>
        <small>${amountLabel(mainItem.amount, mainItem.currency ?? 'CFA')}</small>
        <em>${escapeHtml(carnetAllianceName(mainItem.alliance_id, mainItem.alliance_name))}</em>
        ${dayItems.length > 1 ? `<i>+${dayItems.length - 1}</i>` : ''}
      ` : ''}
    </article>
  `;
}

function renderCarnetPaymentList(month) {
  const items = month.items ?? [];

  return `
    <section class="carnet-list-panel">
      <div class="carnet-list-header">
        <span>
          <h2>Paiements du mois</h2>
          <small>${items.length} echeances pour ${escapeHtml(month.mois)}</small>
        </span>
      </div>

      <div class="carnet-due-list">
        ${items.length ? items.map(renderCarnetDueItem).join('') : '<div class="notice">Aucun paiement detaille pour ce mois.</div>'}
      </div>
    </section>
  `;
}

function renderCarnetDueItem(item) {
  const status = suiviStatus(item.status);
  const allianceName = item.alliance_name ?? carnetAllianceName(item.alliance_id);
  const period = item.period_label ?? item.due_date;
  const method = item.payment_method || 'A encaisser';

  return `
    <article class="carnet-due-row ${carnetStatusClass(item.status)}">
      <span class="carnet-due-marker" style="background:${status.color};"></span>
      <span class="carnet-due-main">
        <strong>${escapeHtml(item.label)}</strong>
        <small>${escapeHtml(period)}</small>
        <em>${escapeHtml(allianceName)} • ${escapeHtml(method)}</em>
      </span>
      <span class="carnet-due-side">
        <strong>${amountLabel(item.amount, item.currency ?? 'CFA')}</strong>
        <small style="background:${status.bg}; color:${status.color};">${status.label}</small>
      </span>
    </article>
  `;
}

function renderCashQr() {
  const data = carnetData();
  const qr = state.cashQr;

  return `
    <main class="screen">
      ${topbar('Mon QR code', 'Paiement en espèces')}
      <section class="page-body content-stack">
        <div class="cash-alliance-list">
          ${(data.alliances ?? []).slice(0, 3).map((alliance) => `
            <button
              class="cash-alliance-chip ${String(state.selectedCashAllianceId ?? qr?.alliance?.id ?? '') === String(alliance.id) ? 'is-active' : ''}"
              data-cash-alliance="${escapeHtml(alliance.id)}"
              type="button"
            >
              ${escapeHtml(alliance.beneficiary_name)}
            </button>
          `).join('')}
        </div>

        ${state.cashQrLoading ? '<div class="loading-card"><span class="loading-spinner"></span><span>Création du QR...</span></div>' : ''}
        ${state.cashQrError ? `<div class="error">${escapeHtml(state.cashQrError)}</div>` : ''}

        ${qr ? `
          <section class="qr-cash-card">
            <div class="qr-cash-header">
              <span class="suivi-avatar">${initials(qr.alliance?.beneficiary_name ?? 'AJ')}</span>
              <span>
                <strong>${escapeHtml(qr.alliance?.beneficiary_name ?? 'Mon Alliance')}</strong>
                <small>${escapeHtml(qr.alliance?.relation ?? 'Alliance')} • ${escapeHtml(qr.alliance?.frequency ?? '')}</small>
              </span>
            </div>

            <div class="qr-amount-card">
              <span>Montant à encaisser</span>
              <strong>${amountLabel(qr.due_item?.amount, qr.due_item?.currency ?? 'CFA')}</strong>
              <small>${escapeHtml(qr.due_item?.label ?? 'Échéance')} • ${escapeHtml(qr.due_item?.due_date ?? '')}</small>
            </div>

            <div class="qr-image-wrap">
              <img src="/qr.svg?data=${encodeURIComponent(qr.qr_payload)}" alt="QR code cash" />
            </div>

            <div class="qr-token-line">
              <span>Code QR</span>
              <strong>${escapeHtml(String(qr.alliance?.qr_code ?? '').slice(-12))}</strong>
            </div>
          </section>

          <button class="link-button" data-refresh-cash-qr type="button">Régénérer le QR</button>
        ` : ''}
      </section>
    </main>
  `;
}

function renderOperator() {
  const result = state.operatorResult;

  return `
    <main class="screen">
      ${topbar('Encaissement cash', 'Operatrice')}
      <section class="page-body content-stack">
        <section class="form-panel">
          <form class="form-grid" id="operator-form">
            <div class="field">
              <label for="operatorName">Nom operatrice</label>
              <input id="operatorName" name="operatorName" autocomplete="name" value="${escapeHtml(state.operatorName)}" />
            </div>
            <div class="field">
              <label for="cashToken">Token QR scanne</label>
              <textarea id="cashToken" name="cashToken" rows="5" placeholder="Coller ou scanner le QR cash">${escapeHtml(state.operatorToken || state.cashQr?.qr_payload || '')}</textarea>
            </div>
            ${state.operatorError ? `<div class="error">${escapeHtml(state.operatorError)}</div>` : ''}
            <button class="primary-button" type="submit">${state.operatorLoading ? 'Lecture...' : 'Lire le QR'}</button>
          </form>
        </section>

        ${result?.alliance ? `
          <section class="status-panel">
            <div class="${result.due_item?.status === 'paid' ? 'success' : 'notice'}">
              ${result.due_item?.status === 'paid' ? 'Cette echeance est payee.' : 'Echeance prete a encaisser.'}
            </div>
            <div class="status-line"><span>Client</span><strong>${escapeHtml(result.alliance.beneficiary_name)}</strong></div>
            <div class="status-line"><span>Echeance</span><strong>${escapeHtml(result.due_item.label)} • ${escapeHtml(result.due_item.due_date)}</strong></div>
            <div class="status-line"><span>Montant</span><strong>${amountLabel(result.due_item.amount, result.due_item.currency ?? 'CFA')}</strong></div>
            <button class="primary-button" data-confirm-cash type="button" ${result.due_item?.status === 'paid' ? 'disabled' : ''}>
              ${state.operatorLoading ? 'Confirmation...' : 'Confirmer paiement cash'}
            </button>
          </section>
        ` : ''}
      </section>
    </main>
  `;
}

function renderAlliances() {
  const totalPaye = SUIVI_MOIS.filter((month) => month.statut === 'paye').length;

  return `
    <main class="screen">
      <section class="app-header suivi-header">
        <div class="page-header">
          <button class="back-button" data-view="home" type="button" aria-label="Retour">‹</button>
          <h1 class="page-title">Mes Alliances & Suivi</h1>
          <button class="back-button" data-view="pay" type="button" aria-label="Ajouter">+</button>
        </div>

        <div class="suivi-resume-card">
          <div class="suivi-resume-top">
            <span>
              <span class="suivi-resume-label">Total contribue</span>
              <strong class="suivi-resume-value">${fmt(SUIVI_STATS.totalContribue)} CFA</strong>
            </span>
            <span class="suivi-resume-badge">${uiIcon('heart')} ${SUIVI_ALLIANCES.length} alliances</span>
          </div>

          <div class="suivi-resume-divider"></div>

          <div class="suivi-resume-bottom">
            <span>Depense ce mois : <strong>${fmt(SUIVI_STATS.depenseMois)} CFA</strong></span>
            <span><strong>${totalPaye}/12</strong> mois payes</span>
          </div>
          <div class="suivi-progress-bg">
            <span style="width:${(totalPaye / 12) * 100}%;"></span>
          </div>
        </div>

        <div class="suivi-toggle">
          ${[
            ['alliances', 'Alliances'],
            ['historique', 'Historique de paiement'],
          ].map(([tab, label]) => `
            <button class="suivi-toggle-btn ${state.suiviTab === tab ? 'is-active' : ''}" data-suivi-tab="${tab}" type="button">${label}</button>
          `).join('')}
        </div>
      </section>

      <section class="suivi-body">
        ${renderSuiviTab()}
      </section>
    </main>
  `;
}

function renderSuiviTab() {
  if (state.suiviTab === 'historique') {
    return renderSuiviHistorique();
  }

  return renderSuiviAlliances();
}

function renderSuiviAlliances() {
  return `
    <div class="suivi-list">
      ${SUIVI_ALLIANCES.map(renderSuiviAllianceCard).join('')}
      <button class="add-alliance-btn" data-view="pay" type="button">
        <span>+</span>
        Souscrire une nouvelle alliance
      </button>
    </div>
  `;
}

function renderSuiviAllianceCard(alliance) {
  return `
    <button class="suivi-alliance-card" data-alliance-id="${alliance.id}" type="button">
      <span class="suivi-alliance-top">
        <span class="suivi-avatar" style="background:${alliance.tint}; color:${alliance.tintText};">${initials(alliance.name)}</span>
        <span class="suivi-identity">
          <strong>${escapeHtml(alliance.name)}</strong>
          <span>${escapeHtml(alliance.relation)}</span>
        </span>
        <span class="suivi-status">
          <i style="background:${alliance.enRetard ? '#FF4D4F' : '#00A876'};"></i>
          <span style="color:${alliance.enRetard ? '#D32F2F' : '#00875F'};">${alliance.enRetard ? 'En retard' : 'À jour'}</span>
        </span>
      </span>
      <span class="suivi-card-divider"></span>
      <span class="suivi-alliance-bottom">
        <span>
          <span class="suivi-meta-label">Forfait</span>
          <strong class="suivi-meta-value">${escapeHtml(alliance.forfait)}</strong>
          <span class="suivi-meta-date">${escapeHtml(alliance.frequence)}</span>
        </span>
        <span>
          <span class="suivi-meta-label">Prochain paiement</span>
          <strong class="suivi-meta-value ${alliance.enRetard ? 'is-late' : ''}">${escapeHtml(alliance.montant)} CFA</strong>
          <span class="suivi-meta-date">${escapeHtml(alliance.prochaine)}</span>
        </span>
      </span>
    </button>
  `;
}

function renderSuiviCalendrier() {
  const selectedMonth = SUIVI_MOIS[state.selectedMois];
  const selectedStatus = suiviStatus(selectedMonth.statut);

  return `
    <div class="suivi-calendar">
      <div class="mois-grid">
        ${SUIVI_MOIS.map((month, index) => {
          const status = suiviStatus(month.statut);
          const selected = state.selectedMois === index;
          return `
            <button
              class="mois-cell ${month.statut === 'a_venir' ? 'is-future' : ''} ${selected ? 'is-selected' : ''}"
              style="background:${status.cellBg}; color:${status.cellFg};"
              data-suivi-month="${index}"
              type="button"
            >
              ${escapeHtml(month.short)}
            </button>
          `;
        }).join('')}
      </div>

      <div class="legende">
        ${[
          ['#00A876', 'Paye'],
          ['#F08A1D', 'Partiel'],
          ['#FF4D4F', 'Impaye'],
          ['#8E92AB', 'A venir'],
        ].map(([color, label]) => `
          <span><i style="background:${color};"></i>${label}</span>
        `).join('')}
      </div>

      <div class="detail-card">
        <div class="detail-header">
          <strong>${escapeHtml(selectedMonth.mois)} 2026</strong>
          <span class="detail-badge" style="background:${selectedStatus.bg}; color:${selectedStatus.color};">${selectedStatus.label}</span>
        </div>
        <span class="suivi-card-divider"></span>
        <div class="detail-line">
          <span>Montant</span>
          <strong>${escapeHtml(selectedMonth.montant)} CFA</strong>
        </div>
        <div class="detail-line">
          <span>${selectedMonth.date ? 'Paye le' : 'Statut'}</span>
          <strong style="color:${selectedStatus.color};">${escapeHtml(selectedMonth.date || selectedStatus.label)}</strong>
        </div>

        ${state.selectedMois === 3 ? `
          <div class="echeances-detail">
            <strong>Detail des echeances</strong>
            ${SUIVI_ECHEANCES_AVRIL.map((echeance) => {
              const status = suiviStatus(echeance.statut);
              return `
                <div class="echeance-detail-row">
                  <i style="background:${status.color};"></i>
                  <span>
                    <strong>${escapeHtml(echeance.label)} - ${escapeHtml(echeance.periode)}</strong>
                    <small>${escapeHtml(echeance.alliance)}</small>
                  </span>
                  <span>
                    <strong style="color:${status.color};">${escapeHtml(echeance.montant)}</strong>
                    <small style="color:${status.color};">${status.label}</small>
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderSuiviHistorique() {
  return `
    <div class="suivi-history">
      ${SUIVI_HISTORIQUE.map((group) => `
        <section>
          <h2>${escapeHtml(group.periode)}</h2>
          ${group.paiements.map((payment) => `
            <article class="history-payment">
              <span class="history-bar"></span>
              <span>
                <strong>${escapeHtml(payment.name)}</strong>
                <small>${escapeHtml(payment.type)} • ${escapeHtml(payment.moyen)} • ${escapeHtml(payment.date)}</small>
              </span>
              <strong>${escapeHtml(payment.montant)} CFA</strong>
            </article>
          `).join('')}
        </section>
      `).join('')}
    </div>
  `;
}

function renderAllianceDetail() {
  const alliance = SUIVI_ALLIANCES.find((item) => item.id === state.selectedAllianceId) ?? SUIVI_ALLIANCES[0];
  const status = suiviStatus(alliance.statut);

  return `
    <main class="screen">
      <section class="app-header detail-alliance-header">
        <div class="page-header">
          <button class="back-button" data-view="alliances" type="button" aria-label="Retour">‹</button>
          <h1 class="page-title">Detail de l'alliance</h1>
          <div class="header-spacer"></div>
        </div>

        <div class="detail-profile">
          <span class="detail-avatar">${uiIcon('heart')}</span>
          <strong>${escapeHtml(alliance.name)}</strong>
          <span>${escapeHtml(alliance.relation)}</span>
        </div>
      </section>

      <section class="detail-body">
        <span class="detail-status" style="background:${status.bg}; color:${status.color};">${status.label}</span>

        <div class="detail-info-card">
          ${[
            ['Forfait journalier', alliance.forfait.replace('/jour', '')],
            ['Frequence', alliance.frequence],
            ['Montant à payer', `${alliance.montant} CFA`, true],
            ['Prochain paiement', alliance.prochaine],
            ['Debut', alliance.dateDebut],
            ['Fin', alliance.dateFin],
          ].map(([label, value, primary]) => `
            <div>
              <span>${escapeHtml(label)}</span>
              <strong class="${primary ? 'is-primary' : ''}">${escapeHtml(value)}</strong>
            </div>
          `).join('')}
        </div>

        <div class="detail-resume-row">
          <div>
            <strong>${escapeHtml(alliance.totalPaye)}</strong>
            <span>CFA payes</span>
          </div>
          <div>
            <strong>${escapeHtml(alliance.paiements)}</strong>
            <span>Paiements</span>
          </div>
        </div>

        ${alliance.enRetard ? '<button class="primary-button" data-view="pay" type="button">Payer maintenant</button>' : ''}
      </section>
    </main>
  `;
}

function render() {
  const screens = {
    welcome: renderWelcome,
    onboarding: renderOnboarding,
    home: renderHome,
    pay: renderPay,
    tracking: renderTracking,
    impayes: renderImpayes,
    carnet: renderCarnet,
    cash: renderCashQr,
    operator: renderOperator,
    alliances: renderAlliances,
    'alliance-detail': renderAllianceDetail,
  };

  app.innerHTML = `${screens[state.view]()}${nav()}`;
}

function readPaymentForm(form) {
  const data = new FormData(form);
  state.form.customerName = String(data.get('customerName') || '').trim();
  state.form.amount = String(data.get('amount') || '').replace(/[^\d]/g, '');
  state.form.customerEmail = String(data.get('customerEmail') || '').trim();
  state.form.subscriptionLabel = String(data.get('subscriptionLabel') || '').trim() || 'Mon Alliance';
  state.form.impayeIds = [];
}

function selectedProvider(id) {
  return state.providers.find((provider) => String(provider.service_id) === String(id));
}

async function createPayment(providerId) {
  const provider = selectedProvider(providerId);
  if (!provider) return;

  const card = isCardProvider(provider);
  const phoneInput = document.querySelector('[data-provider-phone]');
  const otpInput = document.querySelector('[data-orange-otp]');
  const phone = String(phoneInput?.value || '').trim();
  const omOtp = String(otpInput?.value || '').trim();

  if (providerRequiresPhone(provider) && !phone) {
    state.paymentError = providerPhoneLabel(provider.label);
    render();
    return;
  }

  if (normalize(provider.label).includes('orange') && omOtp.length < 4) {
    state.paymentError = 'Le code OTP Orange est obligatoire. Composez #144*82# pour l\'obtenir.';
    render();
    return;
  }

  state.paymentLoading = true;
  state.paymentError = '';
  render();

  try {
    const payment = await postFunction('create-payment', {
      amount: Number(state.form.amount),
      currency: 'XOF',
      paymentMethod: provider.label,
      providerServiceId: Number(provider.service_id),
      providerLabel: provider.label,
      providerMethod: card ? 'credit_card' : (provider.method || 'mobile_money'),
      omOtp,
      customerName: state.form.customerName || 'Client Alliance',
      customerPhone: phone,
      customerEmail: state.form.customerEmail || undefined,
      allianceName: 'Alliance Journaliere',
      subscriptionLabel: state.form.subscriptionLabel,
      dueDate: state.form.dueDate,
      description: `${state.form.subscriptionLabel} - ${state.form.dueDate}`.trim(),
      metadata: {
        source: 'standalone-web-pwa',
        static_echeance_id: state.selectedEcheanceId,
        impaye_ids: state.form.impayeIds ?? [],
        customer_name: state.form.customerName,
        subscription_label: state.form.subscriptionLabel,
        due_date: state.form.dueDate,
      },
    });

    if (payment.checkout_url) {
      location.href = payment.checkout_url;
      return;
    }

    // Mobile money direct (Orange/MTN/Moov) : pas de page de paiement, le
    // client confirme sur son telephone. On bascule sur le suivi du paiement.
    state.paymentLoading = false;
    state.view = 'tracking';
    state.checkReference = payment.reference;
    state.checkError = '';
    state.checkResult = null;
    render();
    startStatusPolling(payment.reference);
    checkPayment(payment.reference);
  } catch (error) {
    state.paymentError = error instanceof Error ? error.message : 'Impossible de creer le paiement.';
    state.paymentLoading = false;
    render();
  }
}

let statusPollTimer = null;

function startStatusPolling(reference) {
  if (statusPollTimer) clearInterval(statusPollTimer);

  let attempts = 0;
  statusPollTimer = setInterval(() => {
    attempts += 1;
    const status = state.checkResult?.status;
    const finished = ['succeeded', 'failed', 'cancelled', 'expired'].includes(status);

    if (attempts > 36 || finished || state.view !== 'tracking') {
      clearInterval(statusPollTimer);
      statusPollTimer = null;
      return;
    }

    if (!state.checkLoading) {
      checkPayment(reference);
    }
  }, 5000);
}

async function checkPayment(reference) {
  state.checkLoading = true;
  state.checkError = '';
  state.checkResult = null;
  render();

  try {
    state.checkResult = await postFunction('check-payment', { reference });
    if (state.checkResult?.status === 'succeeded') {
      loadCarnet(true);
    }
  } catch (error) {
    state.checkError = error instanceof Error ? error.message : 'Impossible de verifier ce paiement.';
  } finally {
    state.checkLoading = false;
    render();
  }
}

async function scanCashToken(token, operatorName) {
  state.operatorLoading = true;
  state.operatorError = '';
  state.operatorResult = null;
  state.operatorToken = token;
  state.operatorName = operatorName || state.operatorName;
  render();

  try {
    state.operatorResult = await postFunction('scan-cash-qr', { token });
  } catch (error) {
    state.operatorError = error instanceof Error ? error.message : 'Impossible de lire ce QR cash.';
  } finally {
    state.operatorLoading = false;
    render();
  }
}

async function confirmCashPayment() {
  const token = state.operatorToken || state.cashQr?.qr_payload;

  if (!token) {
    state.operatorError = 'QR cash manquant.';
    render();
    return;
  }

  state.operatorLoading = true;
  state.operatorError = '';
  render();

  try {
    const result = await postFunction('confirm-cash-payment', {
      token,
      operatorName: state.operatorName,
    });
    state.operatorResult = {
      alliance: result.alliance,
      due_item: result.due_item,
      payment: result.payment,
      already_paid: result.already_paid,
    };
    state.cashQr = null;
    await loadCarnet(true);
  } catch (error) {
    state.operatorError = error instanceof Error ? error.message : 'Impossible de confirmer le paiement cash.';
  } finally {
    state.operatorLoading = false;
    render();
  }
}

app.addEventListener('click', (event) => {
  const target = event.target.closest('button');
  if (!target) return;

  if (target.dataset.suiviTab) {
    state.suiviTab = target.dataset.suiviTab;
    render();
    return;
  }

  if (target.dataset.suiviMonth) {
    state.selectedMois = Number(target.dataset.suiviMonth);
    render();
    return;
  }

  if (target.dataset.carnetMonth) {
    state.selectedCarnetMonth = Number(target.dataset.carnetMonth);
    state.carnetDetailsOpen = false;
    render();
    return;
  }

  if (target.matches('[data-toggle-carnet-details]')) {
    state.carnetDetailsOpen = !state.carnetDetailsOpen;
    render();
    return;
  }

  if (target.matches('[data-refresh-carnet]')) {
    loadCarnet(true);
    return;
  }

  if (target.matches('[data-refresh-cash-qr]')) {
    loadCashQr(true);
    return;
  }

  if (target.dataset.cashAlliance) {
    state.selectedCashAllianceId = target.dataset.cashAlliance;
    state.cashQr = null;
    loadCashQr(true);
    return;
  }

  if (target.matches('[data-confirm-cash]')) {
    confirmCashPayment();
    return;
  }

  if (target.dataset.payImpaye) {
    const impaye = IMPAYES.find((item) => String(item.id) === String(target.dataset.payImpaye));
    if (impaye) {
      payImpayes([impaye]);
    }
    return;
  }

  if (target.matches('[data-pay-all-impayes]')) {
    payImpayes(IMPAYES);
    return;
  }

  if (target.dataset.allianceId) {
    state.selectedAllianceId = Number(target.dataset.allianceId);
    state.view = 'alliance-detail';
    setRoute('alliance-detail');
    render();
    return;
  }

  if (target.dataset.onboardingDot) {
    state.onboardingIndex = Number(target.dataset.onboardingDot);
    render();
    return;
  }

  if (target.matches('[data-onboarding-next]')) {
    if (state.onboardingIndex < ONBOARDING_SLIDES.length - 1) {
      state.onboardingIndex += 1;
      render();
      return;
    }

    localStorage.setItem('aj:pwaStarted', '1');
    state.view = 'home';
    setRoute('home');
    render();
    return;
  }

  if (target.matches('[data-start]')) {
    localStorage.setItem('aj:pwaStarted', '1');
    state.view = 'home';
    setRoute('home');
    render();
    return;
  }

  const nextView = target.dataset.view;
  if (nextView) {
    if (nextView === 'pay') {
      state.payStep = 'form';
    }
    if (nextView === 'home') {
      localStorage.setItem('aj:pwaStarted', '1');
    }
    state.view = nextView;
    setRoute(nextView);
    render();
    if (nextView === 'pay' && state.payStep === 'providers') loadProviders();
    if (nextView === 'carnet') loadCarnet();
    if (nextView === 'cash') {
      loadCarnet();
      loadCashQr();
    }
    return;
  }

  if (target.dataset.echeanceId) {
    const echeance = ECHEANCES.find((item) => String(item.id) === String(target.dataset.echeanceId));
    if (echeance) {
      applyEcheanceToForm(echeance);
      state.paymentError = '';
      render();
    }
    return;
  }

  if (target.matches('[data-go-payment-method]')) {
    const echeance = selectedEcheance();
    applyEcheanceToForm(echeance);
    state.paymentError = '';
    state.payStep = 'method';
    render();
    return;
  }

  if (target.matches('[data-pay-online]')) {
    state.paymentError = '';
    state.payStep = 'providers';
    render();
    loadProviders();
    return;
  }

  if (target.matches('[data-pay-cash]')) {
    state.paymentError = '';
    openCashQrForCurrentPayment();
    return;
  }

  if (target.matches('[data-back-payment]')) {
    state.payStep = state.payStep === 'providers' ? 'method' : 'form';
    state.paymentError = '';
    render();
    return;
  }

  if (target.matches('[data-reload-providers]')) {
    loadProviders(true);
    return;
  }

  if (target.dataset.providerPick) {
    state.selectedProviderId = target.dataset.providerPick;
    state.paymentError = '';
    render();
    return;
  }

  if (target.dataset.payProvider) {
    createPayment(target.dataset.payProvider);
  }
});

app.addEventListener('submit', (event) => {
  event.preventDefault();

  if (event.target.matches('#payment-form')) {
    readPaymentForm(event.target);
    const amount = Number(state.form.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      state.paymentError = 'Entre un montant valide.';
      render();
      return;
    }

    state.paymentError = '';
    state.payStep = 'method';
    render();
    return;
  }

  if (event.target.matches('#check-form')) {
    const data = new FormData(event.target);
    const reference = String(data.get('reference') || '').trim();
    state.checkReference = reference;

    const url = new URL(location.href);
    url.searchParams.set('view', 'tracking');
    url.searchParams.set('reference', reference);
    history.replaceState(null, '', url);

    if (reference) checkPayment(reference);
  }

  if (event.target.matches('#operator-form')) {
    const data = new FormData(event.target);
    const token = String(data.get('cashToken') || '').trim();
    const operatorName = String(data.get('operatorName') || '').trim() || 'Operatrice';

    if (!token) {
      state.operatorError = 'Colle le token du QR cash.';
      render();
      return;
    }

    scanCashToken(token, operatorName);
  }
});

if ('serviceWorker' in navigator) {
  const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname);

  if (location.protocol === 'https:' || isLocalhost) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

render();

if (state.view === 'tracking' && state.checkReference) {
  checkPayment(state.checkReference);
}

if (state.view === 'carnet') {
  loadCarnet();
}

if (state.view === 'cash') {
  loadCarnet();
  loadCashQr();
}
