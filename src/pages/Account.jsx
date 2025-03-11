import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { 
  FaUser, 
  FaShoppingBag, 
  FaHeart, 
  FaAddressCard, 
  FaSignOutAlt,
  FaShippingFast,
  FaMobile,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaHistory,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCreditCard,
  FaEdit
} from "react-icons/fa";
import "../styles/Account.css";

// Mock data for orders
const mockOrders = [
  {
    id: "ORD123456",
    date: "May 15, 2023",
    total: 849.00,
    status: "Delivered",
    items: [
      { id: 1, name: "Chicken Breast - Boneless", quantity: 2, price: 249.00 },
      { id: 2, name: "Atlantic Salmon", quantity: 1, price: 599.00 }
    ]
  },
  {
    id: "ORD123455",
    date: "Apr 30, 2023",
    total: 1249.00,
    status: "Delivered",
    items: [
      { id: 3, name: "Premium Mutton - Curry Cut", quantity: 1, price: 899.00 },
      { id: 4, name: "Fresh Prawns", quantity: 1, price: 350.00 }
    ]
  },
  {
    id: "ORD123454",
    date: "Apr 10, 2023",
    total: 649.00,
    status: "Delivered",
    items: [
      { id: 5, name: "Chicken Tikka Cut", quantity: 1, price: 349.00 },
      { id: 6, name: "Boneless Chicken", quantity: 1, price: 300.00 }
    ]
  }
];

// Mock data for addresses
const mockAddresses = [
  {
    id: 1,
    name: "Home",
    address: "123 Main Street, Apartment 4B",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    phone: "9876543210",
    isDefault: true
  },
  {
    id: 2,
    name: "Office",
    address: "456 Work Avenue, Floor 3",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560002",
    phone: "9876543211",
    isDefault: false
  }
];

const Account = () => {
  // State for authentication and user data
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [activeTab, setActiveTab] = useState("profile");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loginMethod, setLoginMethod] = useState("phone");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // State for user profile
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    profileImage: "/api/placeholder/150/150?text=User"
  });
  
  // State for profile editing
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({...userProfile});
  
  // State for orders and addresses
  const [orders, setOrders] = useState(mockOrders);
  const [addresses, setAddresses] = useState(mockAddresses);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // OTP timer
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Send OTP function
  const sendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      setCountdown(30);
      toast.success("OTP Sent Successfully!");
    } else {
      toast.error("Enter a valid 10-digit phone number.");
    }
  };

  // Verify OTP function
  const verifyOtp = () => {
    if (otp === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      toast.success("Login Successful!");
    } else {
      toast.error("Invalid OTP. Try Again.");
    }
  };

  // Email login function
  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      toast.success("Login Successful!");
    } else {
      toast.error("Please enter both email and password.");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    setOtpSent(false);
    setPhone("");
    setOtp("");
    setEmail("");
    setPassword("");
    toast.success("Logged Out Successfully!");
  };
  
  // Save profile function
  const saveProfile = () => {
    setUserProfile({...editableProfile});
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };
  
  // Set default address
  const setDefaultAddress = (id) => {
    const updatedAddresses = addresses.map(address => ({
      ...address,
      isDefault: address.id === id
    }));
    setAddresses(updatedAddresses);
    toast.success("Default address updated!");
  };
  
  // Delete address
  const deleteAddress = (id) => {
    const updatedAddresses = addresses.filter(address => address.id !== id);
    setAddresses(updatedAddresses);
    toast.success("Address removed successfully!");
  };
  
  // View order details
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };
  
  // Close order details
  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  // Toggle between login methods
  const toggleLoginMethod = () => {
    setLoginMethod(loginMethod === "phone" ? "email" : "phone");
    setOtpSent(false);
    setPhone("");
    setOtp("");
    setEmail("");
    setPassword("");
  };

  // Render login section
  const renderLoginSection = () => {
    return (
      <div className="login-section-container">
        <div className="login-section">
          <div className="login-tabs">
            <button 
              className={`login-tab ${loginMethod === 'phone' ? 'active' : ''}`} 
              onClick={() => setLoginMethod('phone')}
            >
              <FaMobile /> Phone
            </button>
            <button 
              className={`login-tab ${loginMethod === 'email' ? 'active' : ''}`} 
              onClick={() => setLoginMethod('email')}
            >
              <FaEnvelope /> Email
            </button>
          </div>
          
          {loginMethod === 'phone' ? (
            !otpSent ? (
              <div className="phone-login">
                <h2>Login with OTP</h2>
                <p>We'll send a verification code to your phone</p>
                
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="phone-input">
                    <span className="country-code">+91</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      maxLength={10}
                    />
                  </div>
                </div>
                
                <button 
                  className="primary-button" 
                  onClick={sendOtp}
                  disabled={phone.length !== 10}
                >
                  Send OTP
                </button>
                
                <div className="login-footer">
                  <p>Don't have an account?</p>
                  <button className="text-button">Register Now</button>
                </div>
              </div>
            ) : (
              <div className="otp-verification">
                <h2>Verify OTP</h2>
                <p>Enter the code sent to +91 {phone}</p>
                
                <div className="input-group">
                  <label htmlFor="otp">One-Time Password</label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    maxLength={4}
                  />
                </div>
                
                <button 
                  className="primary-button" 
                  onClick={verifyOtp}
                  disabled={otp.length !== 4}
                >
                  Verify & Login
                </button>
                
                <div className="resend-otp">
                  {countdown > 0 ? (
                    <p>Resend OTP in {countdown} seconds</p>
                  ) : (
                    <button className="text-button" onClick={sendOtp}>
                      Resend OTP
                    </button>
                  )}
                </div>
                
                <button 
                  className="back-button" 
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                  }}
                >
                  Change Phone Number
                </button>
              </div>
            )
          ) : (
            <div className="email-login">
              <h2>Login with Email</h2>
              <p>Enter your email and password</p>
              
              <form onSubmit={handleEmailLogin}>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                
                <div className="forgot-password">
                  <button type="button" className="text-button">
                    Forgot Password?
                  </button>
                </div>
                
                <button 
                  type="submit" 
                  className="primary-button"
                  disabled={!email || !password}
                >
                  Login
                </button>
              </form>
              
              <div className="login-footer">
                <p>Don't have an account?</p>
                <button className="text-button">Register Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render user dashboard
  const renderUserDashboard = () => {
    return (
      <div className="user-dashboard">
        <div className="dashboard-sidebar">
          <div className="user-info-brief">
            <div className="user-avatar">
              <img src={userProfile.profileImage} alt={userProfile.name} />
            </div>
            <div className="user-details-brief">
              <h3>{userProfile.name}</h3>
              <p>{userProfile.phone}</p>
            </div>
          </div>
          
          <nav className="dashboard-nav">
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser /> Profile
            </button>
            <button 
              className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <FaShoppingBag /> Orders
            </button>
            <button 
              className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
              onClick={() => setActiveTab('addresses')}
            >
              <FaAddressCard /> Addresses
            </button>
            <button 
              className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <FaHeart /> Wishlist
            </button>
            <button 
              className="nav-item logout"
              onClick={handleLogout}
            >
              <FaSignOutAlt /> Logout
            </button>
          </nav>
        </div>
        
        <div className="dashboard-content">
          {activeTab === 'profile' && (
            <div className="profile-tab">
              <div className="tab-header">
                <h2>My Profile</h2>
                {!isEditing ? (
                  <button 
                    className="edit-button"
                    onClick={() => setIsEditing(true)}
                  >
                    <FaEdit /> Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button 
                      className="cancel-button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditableProfile({...userProfile});
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      className="save-button"
                      onClick={saveProfile}
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
              
              <div className="profile-content">
                <div className="profile-image-section">
                  <div className="profile-image-container">
                    <img 
                      src={isEditing ? editableProfile.profileImage : userProfile.profileImage} 
                      alt="Profile" 
                    />
                    {isEditing && (
                      <button className="change-photo-btn">
                        Change Photo
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="profile-details">
                  <div className="detail-group">
                    <label>Full Name</label>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editableProfile.name}
                        onChange={(e) => setEditableProfile({
                          ...editableProfile,
                          name: e.target.value
                        })}
                      />
                    ) : (
                      <p>{userProfile.name}</p>
                    )}
                  </div>
                  
                  <div className="detail-group">
                    <label>Email Address</label>
                    {isEditing ? (
                      <input 
                        type="email" 
                        value={editableProfile.email}
                        onChange={(e) => setEditableProfile({
                          ...editableProfile,
                          email: e.target.value
                        })}
                      />
                    ) : (
                      <p>{userProfile.email}</p>
                    )}
                  </div>
                  
                  <div className="detail-group">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <input 
                        type="tel" 
                        value={editableProfile.phone}
                        onChange={(e) => setEditableProfile({
                          ...editableProfile,
                          phone: e.target.value.replace(/\D/g, '')
                        })}
                        maxLength={10}
                      />
                    ) : (
                      <p>{userProfile.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div className="orders-tab">
              <div className="tab-header">
                <h2>My Orders</h2>
              </div>
              
              {selectedOrder ? (
                <div className="order-details">
                  <div className="order-details-header">
                    <button 
                      className="back-to-orders"
                      onClick={closeOrderDetails}
                    >
                      Back to Orders
                    </button>
                    <h3>Order #{selectedOrder.id}</h3>
                    <div className="order-meta">
                      <span className="order-date">
                        Placed on {selectedOrder.date}
                      </span>
                      <span className={`order-status ${selectedOrder.status.toLowerCase()}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="order-items">
                    <h4>Order Items</h4>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.items.map(item => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>₹{item.price.toFixed(2)}</td>
                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3" className="order-total-label">Order Total</td>
                          <td className="order-total-value">₹{selectedOrder.total.toFixed(2)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="delivery-info">
                    <h4>Delivery Information</h4>
                    <div className="delivery-address">
                      <p><strong>Address:</strong> 123 Main Street, Apartment 4B</p>
                      <p><strong>City:</strong> Bangalore, Karnataka - 560001</p>
                      <p><strong>Phone:</strong> 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="order-actions">
                    <button className="track-button">
                      <FaShippingFast /> Track Order
                    </button>
                    <button className="reorder-button">
                      Reorder
                    </button>
                  </div>
                </div>
              ) : (
                <div className="orders-list">
                  {orders.length > 0 ? (
                    orders.map(order => (
                      <div key={order.id} className="order-card">
                        <div className="order-header">
                          <div className="order-id">Order #{order.id}</div>
                          <div className={`order-status ${order.status.toLowerCase()}`}>
                            {order.status}
                          </div>
                        </div>
                        
                        <div className="order-info">
                          <div className="order-date">
                            <span className="label">Placed on:</span>
                            <span className="value">{order.date}</span>
                          </div>
                          <div className="order-amount">
                            <span className="label">Total:</span>
                            <span className="value">₹{order.total.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="order-items-preview">
                          {order.items.map((item, index) => (
                            <span key={item.id} className="item-name">
                              {item.name}{index < order.items.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </div>
                        
                        <div className="order-actions">
                          <button 
                            className="view-details-btn"
                            onClick={() => viewOrderDetails(order)}
                          >
                            View Details <FaArrowRight />
                          </button>
                          <button className="track-order-btn">
                            <FaShippingFast /> Track
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-orders">
                      <div className="empty-state">
                        <FaHistory className="empty-icon" />
                        <h3>No Orders Yet</h3>
                        <p>You haven't placed any orders yet.</p>
                        <button className="start-shopping-btn">
                          Browse Products
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'addresses' && (
            <div className="addresses-tab">
              <div className="tab-header">
                <h2>My Addresses</h2>
                <button className="add-button">
                  Add New Address
                </button>
              </div>
              
              <div className="addresses-list">
                {addresses.map(address => (
                  <div key={address.id} className={`address-card ${address.isDefault ? 'default' : ''}`}>
                    {address.isDefault && (
                      <div className="default-badge">Default</div>
                    )}
                    <div className="address-info">
                      <h3 className="address-name">{address.name}</h3>
                      <div className="address-details">
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} - {address.pincode}</p>
                        <p>Phone: {address.phone}</p>
                      </div>
                    </div>
                    <div className="address-actions">
                      <button className="edit-address-btn">Edit</button>
                      <button 
                        className="delete-address-btn"
                        onClick={() => deleteAddress(address.id)}
                      >
                        Delete
                      </button>
                      {!address.isDefault && (
                        <button 
                          className="set-default-btn"
                          onClick={() => setDefaultAddress(address.id)}
                        >
                          Set as Default
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="address-card add-address-card">
                  <div className="add-address-content">
                    <FaMapMarkerAlt className="add-icon" />
                    <h3>Add New Address</h3>
                    <p>Add a new delivery address for your orders</p>
                    <button className="add-address-btn">Add Address</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="wishlist-tab">
              <div className="tab-header">
                <h2>My Wishlist</h2>
              </div>
              
              <div className="empty-wishlist">
                <div className="empty-state">
                  <FaHeart className="empty-icon" />
                  <h3>Your Wishlist is Empty</h3>
                  <p>Save your favorite items to your wishlist.</p>
                  <button className="start-shopping-btn">
                    Start Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="account-page">
      <div className="account-container">
        {!isAuthenticated ? renderLoginSection() : renderUserDashboard()}
      </div>
    </div>
  );
};

export default Account;