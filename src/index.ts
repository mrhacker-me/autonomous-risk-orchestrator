import { RiskOrchestrationAgent } from "./RiskOrchestrationAgent.js";

async function main() {
  console.log("=== Launching Autonomous Risk Orchestration Engine ===");
  
  // 1. Instantiate the agent
  const agent = new RiskOrchestrationAgent();

  // 2. Simulate an incoming high-risk transaction event from a payment gateway
  const mockDisputeEvent = {
    disputeId: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    accountId: "acct_1N9x4I2eZvKYlo2C",
    transactionAmountCents: 750000, // $7,500.00
    currency: "USD",
    chargebackReason: "FRAUDULENT",
    historicalFraudScore: 88,
  };

  // 3. Trigger the autonomous decision loop
  const result = await agent.orchestrateMitigation(mockDisputeEvent);

  // 4. Print the output decision and full execution trace logs
  console.log("\n[Final Decision]:", result.decision);
  console.log("[Telemetry Logs]:", JSON.stringify(result.telemetry, null, 2));
}

main().catch((err) => console.error("Agent Execution Fault:", err));
             
