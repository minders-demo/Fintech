// =============================================================================
// MinderspPay — Amplitude Tracking: Onboarding + Activación
// Ref: https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2
// =============================================================================
//
// INSTALACIÓN:
//   npm install @amplitude/analytics-browser
//
// USO:
//   1. Llamar initAmplitude() en main.tsx al arrancar la app
//   2. Importar las funciones track* en cada pantalla y llamarlas en los handlers
//
// =============================================================================

import * as amplitude from '@amplitude/analytics-browser';
import { Identify } from '@amplitude/analytics-browser';

// ─── Reemplaza con tu API Key real de Amplitude ─────────────────────────────
// Amplitude > Settings > Projects > tu proyecto > API Key
const AMPLITUDE_API_KEY = '84ace0d2f36082f53ba6988af698a0b6';

// ─── Inicialización ─────────────────────────────────────────────────────────
// Ref: https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#initialize-the-sdk
export function initAmplitude(): void {
  amplitude.init(AMPLITUDE_API_KEY, {
    // Autocapture: captura automática sin código adicional
    // Ref: https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#autocapture
    autocapture: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      attribution: true,
      fileDownloads: false,
      elementInteractions: false,
    },
    // Cambiar a amplitude.Types.LogLevel.Debug durante desarrollo
    // Ref: https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#debugging
    logLevel: amplitude.Types.LogLevel.Warn,
  });
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function identifyUser(properties: Record<string, unknown>): void {
  const id = new Identify();
  Object.entries(properties).forEach(([key, value]) => {
    id.set(key, value as string | number | boolean);
  });
  amplitude.identify(id);
}

// Ref: https://amplitude.com/docs/get-started/identify-users
// userId debe tener mínimo 5 caracteres
export function setAmplitudeUserId(userId: string): void {
  if (userId && userId.length >= 5) {
    amplitude.setUserId(userId);
  }
}

// Ref: https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#sending-events
export function resetAmplitudeUser(): void {
  amplitude.reset();
}

// =============================================================================
// EVENTOS DEL ONBOARDING
// =============================================================================
//
// | #  | Evento                     | Pantalla              | Trigger                              |
// |----|----------------------------|-----------------------|--------------------------------------|
// | 1  | onboarding_started         | Login                 | Clic "Regístrate gratis"             |
// | 2  | login_submitted            | Login                 | Clic "Iniciar sesión" / biométrica   |
// | 3  | phone_submitted            | RegisterPhone         | Clic "Continuar"                     |
// | 4  | personal_data_submitted    | RegisterData          | Clic "Continuar"                     |
// | 5  | kyc_document_viewed        | KycDoc                | Pantalla montada                     |
// | 6  | kyc_document_uploaded      | KycDoc                | Clic "Continuar"                     |
// | 7  | kyc_selfie_viewed          | KycSelfie             | Pantalla montada                     |
// | 8  | kyc_selfie_uploaded        | KycSelfie             | Clic "Continuar"                     |
// | 9  | kyc_validation_started     | KycReview             | Pantalla montada                     |
// | 10 | kyc_validation_result      | KycReview             | Clic "Simular validación exitosa"    |
// | 11 | pin_created                | PinCreate             | Clic "Confirmar PIN"                 |
// | 12 | onboarding_completed       | Welcome               | Pantalla montada                     |
// | 13 | onboarding_cta_clicked     | Welcome               | Clic "Ir a mi cuenta"                |
// =============================================================================

// ── LOGIN ────────────────────────────────────────────────────────────────────

export function trackOnboardingStarted(): void {
  amplitude.track('onboarding_started', {
    source: 'login_page',
  });
}

export function trackLoginSubmitted(method: 'credentials' | 'biometric'): void {
  amplitude.track('login_submitted', {
    method,
  });
}

// ── REGISTRO: Celular ────────────────────────────────────────────────────────

export function trackPhoneSubmitted(countryCode: string): void {
  amplitude.track('phone_submitted', {
    country_code: countryCode,
    step_number: 1,
    step_name: 'phone',
  });
}

// ── REGISTRO: Datos personales ───────────────────────────────────────────────

export function trackPersonalDataSubmitted(hasEmail: boolean, hasDni: boolean): void {
  amplitude.track('personal_data_submitted', {
    has_email: hasEmail,
    has_dni: hasDni,
    step_number: 2,
    step_name: 'personal_data',
  });
  identifyUser({
    registration_step: 'personal_data_completed',
    country: 'AR',
  });
}

// ── KYC: Documento ───────────────────────────────────────────────────────────

export function trackKycDocumentViewed(): void {
  amplitude.track('kyc_document_viewed', {
    step_number: 3,
    step_name: 'kyc_document',
  });
}

export function trackKycDocumentUploaded(side: 'front' | 'back'): void {
  amplitude.track('kyc_document_uploaded', {
    side,
    step_number: 3,
    step_name: 'kyc_document',
  });
}

// ── KYC: Selfie ──────────────────────────────────────────────────────────────

export function trackKycSelfieViewed(): void {
  amplitude.track('kyc_selfie_viewed', {
    step_number: 4,
    step_name: 'kyc_selfie',
  });
}

export function trackKycSelfieUploaded(): void {
  amplitude.track('kyc_selfie_uploaded', {
    step_number: 4,
    step_name: 'kyc_selfie',
  });
}

// ── KYC: Validación ──────────────────────────────────────────────────────────

export function trackKycValidationStarted(): void {
  amplitude.track('kyc_validation_started', {
    step_number: 5,
    step_name: 'kyc_validation',
  });
}

export function trackKycValidationResult(status: 'success' | 'failed' | 'manual_review'): void {
  amplitude.track('kyc_validation_result', {
    status,
    step_number: 5,
    step_name: 'kyc_validation',
  });
  identifyUser({
    kyc_status: status,
    registration_step: 'kyc_completed',
  });
}

// ── PIN ──────────────────────────────────────────────────────────────────────

export function trackPinCreated(): void {
  amplitude.track('pin_created', {
    step_number: 6,
    step_name: 'pin_creation',
  });
  identifyUser({
    registration_step: 'pin_created',
  });
}

// ── BIENVENIDA ───────────────────────────────────────────────────────────────

export function trackOnboardingCompleted(): void {
  amplitude.track('onboarding_completed', {
    step_number: 7,
    step_name: 'welcome',
  });
  identifyUser({
    registration_step: 'onboarding_completed',
    is_onboarded: true,
  });
}

export function trackOnboardingCtaClicked(): void {
  amplitude.track('onboarding_cta_clicked', {
    cta_text: 'ir_a_mi_cuenta',
  });
}

// =============================================================================
// EVENTOS DE ACTIVACIÓN (Post-Onboarding → Aha Moment)
// =============================================================================
//
// El "Aha Moment" de Minders Pay es cuando el usuario completa su primera
// transacción real (transferencia, pago de servicios o recarga móvil).
// Ese es el momento en el que siente el valor core del producto.
//
// FLUJO DE ACTIVACIÓN:
// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Fase 1 — Entrada                                                       │
// │   activation_started (Dashboard se monta por primera vez)              │
// │                                                                         │
// │ Fase 2 — Exploración                                                   │
// │   balance_viewed · quick_action_tapped · card_viewed                   │
// │                                                                         │
// │ Fase 3 — Fondeo (money-in)                                             │
// │   topup_started → topup_channel_selected → topup_completed             │
// │                                                                         │
// │ Fase 4 — Primera transacción (money-out) ← AHA MOMENT                 │
// │   transfer_started → transfer_recipient_filled → transfer_confirmed    │
// │   pay_service_started → pay_service_completed                          │
// │   mobile_topup_started → mobile_topup_completed                        │
// │                          ↓                                             │
// │              first_transaction_completed  ★                            │
// │                                                                         │
// │ Engagement adicional                                                    │
// │   movements_viewed · pocket_created · profile_viewed                   │
// └─────────────────────────────────────────────────────────────────────────┘
//
// | #  | Evento                          | Pantalla            | Trigger                                |
// |----|---------------------------------|---------------------|----------------------------------------|
// | 1  | activation_started              | Dashboard           | Pantalla montada (1ra vez)             |
// | 2  | balance_viewed                  | Dashboard           | Toggle ocultar/mostrar saldo           |
// | 3  | quick_action_tapped             | Dashboard           | Clic en cualquier acción rápida        |
// | 4  | card_viewed                     | Cards               | Pantalla montada                       |
// | 5  | topup_started                   | TopupChannel        | Pantalla montada                       |
// | 6  | topup_channel_selected          | TopupChannel        | Clic en canal (banco o efectivo)       |
// | 7  | topup_completed                 | TopupSuccess        | Pantalla montada (dinero acreditado)   |
// | 8  | transfer_started                | Transfer            | Pantalla montada                       |
// | 9  | transfer_recipient_filled       | Transfer            | Selecciona contacto o escribe destino  |
// | 10 | transfer_confirmed              | TransferConfirm     | Clic "Confirmar y enviar"              |
// | 11 | pay_service_started             | PayServices         | Pantalla montada                       |
// | 12 | pay_service_completed           | OperationSuccess    | Pantalla éxito (tipo pay_services)     |
// | 13 | mobile_topup_started            | MobileTopup         | Pantalla montada                       |
// | 14 | mobile_topup_completed          | OperationSuccess    | Pantalla éxito (tipo mobile_topup)     |
// | 15 | first_transaction_completed     | OperationSuccess    | Cualquier operación exitosa = AHA      |
// | 16 | movements_viewed                | Movements           | Pantalla montada                       |
// | 17 | pocket_created                  | CreatePocket        | Submit del formulario                  |
// | 18 | profile_viewed                  | Profile             | Pantalla montada                       |
// =============================================================================

// ── FASE 1: ENTRADA ─────────────────────────────────────────────────────────

export function trackActivationStarted(): void {
  amplitude.track('activation_started', {
    source: 'dashboard',
    phase: 'entry',
  });
  identifyUser({
    activation_phase: 'started',
  });
}

// ── FASE 2: EXPLORACIÓN ─────────────────────────────────────────────────────

export function trackBalanceViewed(action: 'show' | 'hide'): void {
  amplitude.track('balance_viewed', {
    action,
    phase: 'exploration',
  });
}

export function trackQuickActionTapped(actionLabel: string, destination: string): void {
  amplitude.track('quick_action_tapped', {
    action_label: actionLabel,
    destination,
    phase: 'exploration',
  });
}

export function trackCardViewed(): void {
  amplitude.track('card_viewed', {
    phase: 'exploration',
  });
}

// ── FASE 3: FONDEO (MONEY-IN) ───────────────────────────────────────────────

export function trackTopupStarted(): void {
  amplitude.track('topup_started', {
    phase: 'funding',
  });
}

export function trackTopupChannelSelected(channel: 'bank_transfer' | 'cash'): void {
  amplitude.track('topup_channel_selected', {
    channel,
    phase: 'funding',
  });
}

export function trackTopupCompleted(amount: number, channel: string): void {
  amplitude.track('topup_completed', {
    amount,
    channel,
    phase: 'funding',
  });
  identifyUser({
    activation_phase: 'funded',
    has_funded: true,
    first_topup_amount: amount,
  });
}

// ── FASE 4: PRIMERA TRANSACCIÓN (AHA MOMENT) ────────────────────────────────

export function trackTransferStarted(): void {
  amplitude.track('transfer_started', {
    phase: 'first_transaction',
  });
}

export function trackTransferRecipientFilled(method: 'contact_selected' | 'manual_input'): void {
  amplitude.track('transfer_recipient_filled', {
    method,
    phase: 'first_transaction',
  });
}

export function trackTransferConfirmed(amount: number, recipient: string): void {
  amplitude.track('transfer_confirmed', {
    amount,
    recipient,
    phase: 'first_transaction',
  });
}

export function trackPayServiceStarted(): void {
  amplitude.track('pay_service_started', {
    phase: 'first_transaction',
  });
}

export function trackPayServiceCompleted(serviceName: string, amount: number): void {
  amplitude.track('pay_service_completed', {
    service_name: serviceName,
    amount,
    phase: 'first_transaction',
  });
}

export function trackMobileTopupStarted(): void {
  amplitude.track('mobile_topup_started', {
    phase: 'first_transaction',
  });
}

export function trackMobileTopupCompleted(operator: string, amount: number, country: string): void {
  amplitude.track('mobile_topup_completed', {
    operator,
    amount,
    country,
    phase: 'first_transaction',
  });
}

// ★ AHA MOMENT — Se dispara en CUALQUIER operación exitosa
export function trackFirstTransactionCompleted(
  type: 'transfer' | 'pay_services' | 'mobile_topup',
  amount: number
): void {
  amplitude.track('first_transaction_completed', {
    transaction_type: type,
    amount,
    phase: 'aha_moment',
  });
  identifyUser({
    activation_phase: 'activated',
    is_activated: true,
    activation_transaction_type: type,
  });
}

// ── ENGAGEMENT ADICIONAL ────────────────────────────────────────────────────

export function trackMovementsViewed(): void {
  amplitude.track('movements_viewed', {
    phase: 'engagement',
  });
}

export function trackPocketCreated(name: string, goalAmount: number): void {
  amplitude.track('pocket_created', {
    pocket_name: name,
    goal_amount: goalAmount,
    phase: 'engagement',
  });
  identifyUser({
    has_pocket: true,
  });
}

export function trackProfileViewed(): void {
  amplitude.track('profile_viewed', {
    phase: 'engagement',
  });
}
