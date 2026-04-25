import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { VendorRegistration } from "./components/VendorRegistration";
import { VendorManagement } from "./components/VendorManagement";
import { ContractManagement } from "./components/ContractManagement";
import { RFQManagement } from "./components/RFQManagement";
import { PurchaseOrderManagement } from "./components/PurchaseOrderManagement";
import { GoodsReceipts } from "./components/GoodsReceipts";
import { InvoiceManagement } from "./components/InvoiceManagement";
import { APAutomation } from "./components/APAutomation";
import { PaymentManagement } from "./components/PaymentManagement";
import { DocumentManagement } from "./components/DocumentManagement";
import { Analytics } from "./components/Analytics";
import { Settings } from "./components/Settings";
import { AuditTrail } from "./components/AuditTrail";
import { SourcingRFx } from "./components/SourcingRFx";
import { RegulatoryCompliance } from "./components/RegulatoryCompliance";
import { DeliverySlots } from "./components/DeliverySlots";
import { DisputeManagement } from "./components/DisputeManagement";
import { GateEntryIntegration } from "./components/GateEntryIntegration";
import { SupplierDashboard } from "./components/SupplierDashboard";
import { Databoards } from "./components/Databoards";
import { RegistrationReview } from "./components/RegistrationReview";
import ProcurementCollaboration from "./components/ProcurementCollaboration";

export type NavigationItem =
  | "registration"
  | "registration-review"
  | "vendors"
  | "contracts"
  | "sourcing-rfx"
  | "rfq"
  | "purchase-orders"
  | "goods-receipts"
  | "procurement-collaboration"
  | "invoices"
  | "ap-automation"
  | "payments"
  | "documents"
  | "analytics"
  | "audit-trail"
  | "regulatory-compliance"
  | "delivery-slots"
  | "dispute-management"
  | "gate-entry"
  | "supplier-dashboard"
  | "databoards"
  | "settings";

export default function App() {
  const [activeSection, setActiveSection] =
    useState<NavigationItem>("vendors");

  const renderContent = () => {
    switch (activeSection) {
      case "registration":
        return <VendorRegistration />;
      case "registration-review":
        return <RegistrationReview />;
      case "vendors":
        return (
          <VendorManagement
            onNavigateToRegistration={() =>
              setActiveSection("registration")
            }
          />
        );
      case "contracts":
        return <ContractManagement />;
      case "sourcing-rfx":
        return <SourcingRFx />;
      case "rfq":
        return <RFQManagement />;
      case "purchase-orders":
        return <PurchaseOrderManagement />;
      case "goods-receipts":
        return <GoodsReceipts />;
      case "procurement-collaboration":
        return <ProcurementCollaboration />;
      case "invoices":
        return <InvoiceManagement />;
      case "ap-automation":
        return <APAutomation />;
      case "payments":
        return <PaymentManagement />;
      case "documents":
        return <DocumentManagement />;
      case "analytics":
        return <Analytics />;
      case "audit-trail":
        return <AuditTrail />;
      case "regulatory-compliance":
        return <RegulatoryCompliance />;
      case "delivery-slots":
        return <DeliverySlots />;
      case "dispute-management":
        return <DisputeManagement />;
      case "gate-entry":
        return <GateEntryIntegration />;
      case "supplier-dashboard":
        return <SupplierDashboard />;
      case "databoards":
        return <Databoards />;
      case "settings":
        return <Settings />;
      default:
        return <VendorManagement />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}