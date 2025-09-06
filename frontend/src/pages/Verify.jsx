import React, { useState } from "react";

const Verify = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", item: "Red Backpack", email: "alice@mail.com", studentId: "SOA123", course: "CSE", year: "2nd Year", photo: "https://i.pravatar.cc/100?img=1", status: "Pending" },
    { id: 2, name: "Bob", item: "Pink Purse", email: "bob@mail.com", studentId: "SOA124", course: "ECE", year: "1st Year", photo: "https://i.pravatar.cc/100?img=2", status: "Pending" },
    { id: 3, name: "Charlie", item: "Black Wallet", email: "charlie@mail.com", studentId: "SOA125", course: "ME", year: "3rd Year", photo: "https://i.pravatar.cc/100?img=3", status: "Pending" },
    { id: 4, name: "Divya", item: "Silver Watch", email: "divya@mail.com", studentId: "SOA126", course: "CSE", year: "2nd Year", photo: "https://i.pravatar.cc/100?img=4", status: "Pending" },
    { id: 5, name: "Esha", item: "Laptop Bag", email: "esha@mail.com", studentId: "SOA127", course: "IT", year: "4th Year", photo: "https://i.pravatar.cc/100?img=5", status: "Pending" }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectUser = (id) => {
    const user = users.find((u) => u.id === id);
    setSelectedUser(user);
    setShowOtp(false);
    setOtp("");
  };

  const sendOtp = () => {
    alert("OTP sent to " + selectedUser.email);
    setShowOtp(true);
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      alert("✅ Verified Successfully!");
      setUsers((prev) =>
        prev.map((u) =>
          u.id === selectedUser.id ? { ...u, status: "Approved" } : u
        )
      );
      setSelectedUser({ ...selectedUser, status: "Approved" });
    } else {
      alert("❌ Wrong OTP!");
    }
  };

  const disapprove = () => {
    alert("❌ Item Disapproved!");
    setUsers((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id ? { ...u, status: "Disapproved" } : u
      )
    );
    setSelectedUser({ ...selectedUser, status: "Disapproved" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f5f6fa" }}>
      <h1>Lost & Found Verification System</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="🔍 Search user by name or item..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "8px", width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
        />
      </div>

      {/* User Buttons */}
      <div style={{ display: "flex", gap: "10px", overflowX: "auto", marginBottom: "15px" }}>
        {filteredUsers.map((user) => (
          <button
            key={user.id}
            onClick={() => selectUser(user.id)}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: selectedUser?.id === user.id ? "#4a90e2" : "#fff",
              color: selectedUser?.id === user.id ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {user.name}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Left: User & Item Details */}
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <h2>User & Item Details</h2>
          {selectedUser ? (
            <>
              <div style={{ border: "2px solid #4a90e2", borderRadius: "12px", padding: "15px", textAlign: "center", background: "#f0f8ff" }}>
                <img src={selectedUser.photo} alt="Profile" style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }} />
                <h3>{selectedUser.name}</h3>
                <p><b>Student ID:</b> {selectedUser.studentId}</p>
                <p><b>Course:</b> {selectedUser.course}</p>
                <p><b>Year:</b> {selectedUser.year}</p>
              </div>
              <p><b>Item:</b> {selectedUser.item}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p style={{ fontWeight: "bold" }}>Status: {selectedUser.status}</p>
            </>
          ) : (
            <p>Select a user to view details.</p>
          )}
        </div>

        {/* Right: Verification */}
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <h2>Verification</h2>
          {selectedUser ? (
            <>
              <p>Verifying for <b>{selectedUser.name}</b></p>
              <button onClick={sendOtp} style={{ padding: "10px 15px", borderRadius: "8px", background: "#f5a623", color: "white", border: "none", cursor: "pointer", marginRight: "10px" }}>
                Send OTP
              </button>

              {showOtp && (
                <div style={{ marginTop: "10px" }}>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px", width: "100%", marginBottom: "10px" }}
                  />
                  <button onClick={verifyOtp} style={{ padding: "10px 15px", borderRadius: "8px", background: "#27ae60", color: "white", border: "none", cursor: "pointer" }}>
                    Approve
                  </button>
                </div>
              )}

              <button onClick={disapprove} style={{ marginTop: "10px", padding: "10px 15px", borderRadius: "8px", background: "#e74c3c", color: "white", border: "none", cursor: "pointer" }}>
                Disapprove
              </button>
            </>
          ) : (
            <p>Select a user first.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;