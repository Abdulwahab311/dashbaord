import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterSalesLayout from "./afterSalesDashboard/layout/Layout";
import Dashboard from "./afterSalesDashboard/pages/Dashboard";
import DashboardHealthCare from "./HealthCareContractPhase/pages/Dashboard";
import GrowthModelLayout from "./growthModel/layout/Layout";
import GrowthModelDashboard from "./growthModel/pages/GrowthModelDashboard";
import FinancialLayout from "./FinancialDashbord/layout/Layout";
import FinancialDashboard from "./FinancialDashbord/pages/FinanencialDashboard";
import InventmentDashboard from "./InvestmentPotentialDashboard/pages/InventmentDashboard";
import InvestementLayout from "./InvestmentPotentialDashboard/layout/Layout";
import BusinessDashboard from "./BusinessModel/pages/BusinessDashboard";
import SalesDashboard from "./sales/pages/SalesDashboard";
import IndustryLayout from "./IndustryDashboard/layout/Layout";
import IndustryDashboard from "./IndustryDashboard/pages/IndustryDashboard";
import Client from "./ClientFinancial/pages/ClientFinancial";
import ClientLayout from "./ClientFinancial/layout/Layout";
import BusinessModelDashboard from "./Business/pages/BusinessModelDashboard";
import MarketingDashboard from "./maketing/pages/MarketingDashboard";
import ClientHealthLayout from "./ClientHealthDashboard/layout/Layout";
import ClientHealth from "./ClientHealthDashboard/pages/ClientHealth";
import HealthCare2 from "./HealthCare2Dashbaord/pages/Dashboard"

import ScoreBoardDashboard from './scoreBoard/pages/ScoreBoardDashboard';
import FunnelDashboard from './funnelDashboard/pages/FunnelDashboard';
const App = () => {
  return (
    <>
      <Router>
        {/* after sales dashboard */}
        <Routes>
          <Route
            path="/aftersales/dashboard"
            element={
              <AfterSalesLayout>
                <Dashboard />
              </AfterSalesLayout>
            }
          />
          <Route
            path="/ClientHealth/dashboard"
            element={
              <ClientHealthLayout>
                <ClientHealth />
              </ClientHealthLayout>
            }
          />
          <Route
            path="/industry/dashboard"
            element={
              <IndustryLayout>
                <IndustryDashboard />
              </IndustryLayout>
            }
          />
          <Route
            path="/Client/dashboard"
            element={
              <ClientLayout>
                <Client />
              </ClientLayout>
            }
          />
          {/* health care dashboard */}
          <Route
            path="/healthcare/dashboard"
            element={
              <AfterSalesLayout>
                <DashboardHealthCare />
              </AfterSalesLayout>
            }
          />
          {/* sales daboard */}
          <Route
            path="/sales/dashboard"
            element={
              <AfterSalesLayout>
                <SalesDashboard />
              </AfterSalesLayout>
            }
          />
          <Route
            path="/Health2/dashboard"
            element={
              <AfterSalesLayout>
                <HealthCare2 />
              </AfterSalesLayout>
            }
          />
          {/* growth model dashboard */}
          <Route
            path="/growthmodel/dashboard"
            element={
              <GrowthModelLayout>
                <GrowthModelDashboard />
              </GrowthModelLayout>
            }
          />
          <Route
            path="/financial/dashboard"
            element={
              <FinancialLayout>
                <FinancialDashboard />
              </FinancialLayout>
            }
          />
          <Route
            path="/investment/dashboard"
            element={
              <InvestementLayout>
                <InventmentDashboard />
              </InvestementLayout>
            }
          />

          <Route
            path="/businessmodel/dashboard"
            element={
              <GrowthModelLayout>
                <BusinessDashboard />
              </GrowthModelLayout>
            }
          />

          <Route
            path="/business/dashboard"
            element={
              <AfterSalesLayout>
                <BusinessModelDashboard />
              </AfterSalesLayout>
            }
          />
          <Route
            path="/marketing/dashboard"
            element={
              <AfterSalesLayout>
                <MarketingDashboard />
              </AfterSalesLayout>
            }
          />
           <Route
        path="/scoreboard/dashboard"
        element={
          <AfterSalesLayout>
          <ScoreBoardDashboard/>
        </AfterSalesLayout>
        }
      />
       <Route
        path="/funnel/dashboard"
        element={
          <AfterSalesLayout>
          <FunnelDashboard/>
        </AfterSalesLayout>
        }
      />
        </Routes>
      </Router>
    </>
  );
};

export default App;
