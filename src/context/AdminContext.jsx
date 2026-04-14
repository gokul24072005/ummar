import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext(null);

const ADMIN_USER = "admin";
const ADMIN_PASS = "izone@2024";

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

const persist = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const makeCrud = (setter) => ({
  add: (item) => setter((p) => [...p, { ...item, id: Date.now().toString() }]),
  update: (id, item) => setter((p) => p.map((x) => (x.id === id ? { ...x, ...item } : x))),
  remove: (id) => setter((p) => p.filter((x) => x.id !== id)),
});

export const AdminProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => load("admin_auth", false));
  const [popups, setPopups] = useState(() => load("admin_popups", []));
  const [testimonials, setTestimonials] = useState(() => load("admin_testimonials", []));
  const [jobRoles, setJobRoles] = useState(() => load("admin_jobroles", []));
  const [contacts, setContacts] = useState(() => load("admin_contacts", []));
  const [interns, setInterns] = useState(() => load("admin_interns", []));
  const [clients, setClients] = useState(() => load("admin_clients", []));
  const [internApplications, setInternApplications] = useState(() => load("admin_intern_apps", []));
  const [jobApplications, setJobApplications] = useState(() => load("admin_job_apps", []));
  const [teamMembers, setTeamMembers] = useState(() => load("admin_team", []));
  const [internRoles, setInternRoles] = useState(() => load("admin_intern_roles", []));
  const [sitePhotos, setSitePhotos] = useState(() => load("admin_site_photos", []));
  const [readIds, setReadIds] = useState(() => load("admin_read_ids", []));
  const [serviceRequests, setServiceRequests] = useState(() => load("admin_service_requests", []));

  useEffect(() => { persist("admin_popups", popups); }, [popups]);
  useEffect(() => { persist("admin_testimonials", testimonials); }, [testimonials]);
  useEffect(() => { persist("admin_jobroles", jobRoles); }, [jobRoles]);
  useEffect(() => { persist("admin_contacts", contacts); }, [contacts]);
  useEffect(() => { persist("admin_interns", interns); }, [interns]);
  useEffect(() => { persist("admin_clients", clients); }, [clients]);
  useEffect(() => { persist("admin_intern_apps", internApplications); }, [internApplications]);
  useEffect(() => { persist("admin_job_apps", jobApplications); }, [jobApplications]);
  useEffect(() => { persist("admin_team", teamMembers); }, [teamMembers]);
  useEffect(() => { persist("admin_intern_roles", internRoles); }, [internRoles]);
  useEffect(() => { persist("admin_site_photos", sitePhotos); }, [sitePhotos]);
  useEffect(() => { persist("admin_read_ids", readIds); }, [readIds]);
  useEffect(() => { persist("admin_service_requests", serviceRequests); }, [serviceRequests]);

  const adminLogin = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      persist("admin_auth", true);
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    persist("admin_auth", false);
    setIsAdminLoggedIn(false);
  };

  const addInternApplication = (item) =>
    setInternApplications((p) => [
      ...p,
      { ...item, id: Date.now().toString(), date: new Date().toLocaleDateString(), status: "Pending", createdAt: Date.now() },
    ]);

  const addJobApplication = (item) =>
    setJobApplications((p) => [
      ...p,
      { ...item, id: Date.now().toString(), date: new Date().toLocaleDateString(), status: "Pending", createdAt: Date.now() },
    ]);

  const addContact = (item) =>
    setContacts((p) => [
      ...p,
      { ...item, id: Date.now().toString(), date: new Date().toLocaleDateString(), createdAt: Date.now() },
    ]);

  const addServiceRequest = (item) =>
    setServiceRequests((p) => [
      ...p,
      { ...item, id: Date.now().toString(), date: new Date().toLocaleDateString(), status: "New", createdAt: Date.now() },
    ]);

  const markRead = (id) => setReadIds((p) => p.includes(id) ? p : [...p, id]);

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn, adminLogin, adminLogout,
        popups, popupOps: makeCrud(setPopups),
        testimonials, testimonialOps: makeCrud(setTestimonials),
        jobRoles, jobRoleOps: makeCrud(setJobRoles),
        contacts, contactOps: makeCrud(setContacts), addContact,
        interns, internOps: makeCrud(setInterns),
        clients, clientOps: makeCrud(setClients),
        internApplications, internAppOps: makeCrud(setInternApplications), addInternApplication,
        jobApplications, jobAppOps: makeCrud(setJobApplications), addJobApplication,
        teamMembers, teamOps: makeCrud(setTeamMembers),
        internRoles, internRoleOps: makeCrud(setInternRoles),
        sitePhotos, sitePhotoOps: makeCrud(setSitePhotos),
        serviceRequests, serviceRequestOps: makeCrud(setServiceRequests), addServiceRequest,
        readIds, markRead,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
