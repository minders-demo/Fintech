export type Screen = 
  | 'login'
  | 'register_phone' 
  | 'register_data' 
  | 'kyc_doc' 
  | 'kyc_selfie' 
  | 'kyc_review' 
  | 'pin_create' 
  | 'terms' 
  | 'welcome' 
  | 'dashboard' 
  | 'transfer' 
  | 'transfer_confirm' 
  | 'transaction_detail'
  | 'products' 
  | 'finance'
  | 'movements'
  | 'topup_channel'
  | 'topup_instructions'
  | 'topup_cash'
  | 'topup_success'
  | 'notifications'
  | 'market'
  | 'market_hub'
  | 'cdt_digital'
  | 'daily_yield'
  | 'investment_hub'
  | 'cards'
  | 'card_manage'
  | 'card_pin'
  | 'card_detail'
  | 'charge_qr'
  | 'mobile_topup'
  | 'operation_success'
  | 'sales_stats'
  | 'create_payment_link'
  | 'business_dashboard'
  | 'insurance_detail'
  | 'insurance_wizard'
  | 'insurance_hub'
  | 'credit_sign'
  | 'credit_offer'
  | 'pocket_detail'
  | 'create_pocket'
  | 'savings_hub'
  | 'referrals'
  | 'benefits'
  | 'ai_support'
  | 'security'
  | 'catalog'
  | 'profile'
  | 'pay_services';

export interface TransferData {
  amount: string;
  recipient: string;
  successType?: 'transfer' | 'pin' | 'credit' | 'pay_services' | 'mobile_topup' | 'topup';
}

export interface Movement {
  id: string;
  type: "transfer_out" | "transfer_in" | "purchase";
  status: "completed" | "pending";
  amount: number;
  formattedAmount: string;
  recipientName: string;
  concept: string;
  category: string;
  createdAtISO: string;
  dateLabel: string;
  timeLabel: string;
  operationNumber: string;
}
