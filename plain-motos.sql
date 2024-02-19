--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-02-19 19:44:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 65155)
-- Name: Alarma; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Alarma" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(40) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    devices text[],
    estado public."EstadoAlarma" DEFAULT 'DESACTIVADA'::public."EstadoAlarma" NOT NULL,
    typealarma_id uuid NOT NULL
);


ALTER TABLE public."Alarma" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 65208)
-- Name: Circle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Circle" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    radius integer NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    polygon_id uuid NOT NULL
);


ALTER TABLE public."Circle" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 65214)
-- Name: Client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Client" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    ci integer NOT NULL,
    fullname character varying(350) NOT NULL,
    address character varying(250) DEFAULT ''::character varying,
    phone character varying(20) DEFAULT ''::character varying,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    user_id uuid
);


ALTER TABLE public."Client" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 65248)
-- Name: Dispositivo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Dispositivo" (
    id integer NOT NULL,
    serial text NOT NULL,
    chipgsm character varying(20) NOT NULL,
    megas timestamp(3) without time zone,
    estado public."EstadoDevice" DEFAULT 'DISPONIBLE'::public."EstadoDevice" NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone
);


ALTER TABLE public."Dispositivo" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 65247)
-- Name: Dispositivo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Dispositivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Dispositivo_id_seq" OWNER TO postgres;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 230
-- Name: Dispositivo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Dispositivo_id_seq" OWNED BY public."Dispositivo".id;


--
-- TOC entry 222 (class 1259 OID 65183)
-- Name: Geofence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Geofence" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(120) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    "typegeofenceId" uuid NOT NULL
);


ALTER TABLE public."Geofence" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 65196)
-- Name: Location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Location" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    polygon_id uuid NOT NULL
);


ALTER TABLE public."Location" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 65225)
-- Name: Moto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Moto" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    marca character varying(100) DEFAULT ''::character varying,
    modelo character varying(100) NOT NULL,
    anio integer DEFAULT 0,
    placa character varying(15) NOT NULL,
    motor character varying(10) DEFAULT ''::character varying,
    color character varying(10) DEFAULT ''::character varying,
    peso numeric(10,2) DEFAULT 0,
    kilometraje numeric(10,2) DEFAULT 0,
    estado character varying(50) DEFAULT ''::character varying,
    fecha_compra timestamp(3) without time zone,
    precio_compra numeric(10,2) DEFAULT 0,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    client_id uuid NOT NULL,
    sucrusal_id uuid
);


ALTER TABLE public."Moto" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 65240)
-- Name: MotoDispo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MotoDispo" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    moto_id uuid,
    dispositivo_id integer,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone
);


ALTER TABLE public."MotoDispo" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 65202)
-- Name: Polygon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Polygon" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    typegeo_id uuid NOT NULL
);


ALTER TABLE public."Polygon" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 65140)
-- Name: Position; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Position" (
    id integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    "timestamp" integer,
    speed numeric(8,6),
    batt numeric(8,6),
    dispositivo_id integer NOT NULL
);


ALTER TABLE public."Position" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 65139)
-- Name: Position_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Position_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Position_id_seq" OWNER TO postgres;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 216
-- Name: Position_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Position_id_seq" OWNED BY public."Position".id;


--
-- TOC entry 232 (class 1259 OID 65258)
-- Name: Role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Role" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(20) NOT NULL,
    descripcion text DEFAULT ''::text
);


ALTER TABLE public."Role" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 65177)
-- Name: Sucrusal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Sucrusal" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(120) NOT NULL,
    direccion character varying(250) NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL
);


ALTER TABLE public."Sucrusal" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 65147)
-- Name: TypeAlarma; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TypeAlarma" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."TypeAlarma" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 65190)
-- Name: Typegeofence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Typegeofence" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    in_out boolean DEFAULT false NOT NULL,
    "isBoth" boolean DEFAULT false NOT NULL,
    typealarma_id uuid NOT NULL
);


ALTER TABLE public."Typegeofence" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 65359)
-- Name: Typeparked; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Typeparked" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    limit_minutes integer DEFAULT 0 NOT NULL,
    typealarma_id uuid NOT NULL
);


ALTER TABLE public."Typeparked" OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 65267)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    username text NOT NULL,
    password character varying(2000) NOT NULL,
    email text NOT NULL,
    avatar character varying(30) DEFAULT ''::character varying,
    "isAdmin" boolean DEFAULT false NOT NULL,
    status public."EstadoUser" DEFAULT 'ACTIVO'::public."EstadoUser" NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    role_id uuid NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 65165)
-- Name: UserAlarma; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserAlarma" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    inicio time without time zone,
    fin time without time zone,
    "isTemp" boolean DEFAULT false NOT NULL,
    emails text[],
    discord boolean DEFAULT false NOT NULL,
    telegram boolean DEFAULT false NOT NULL,
    alarma_id uuid,
    user_id uuid,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone
);


ALTER TABLE public."UserAlarma" OWNER TO postgres;

--
-- TOC entry 4727 (class 2604 OID 65251)
-- Name: Dispositivo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dispositivo" ALTER COLUMN id SET DEFAULT nextval('public."Dispositivo_id_seq"'::regclass);


--
-- TOC entry 4691 (class 2604 OID 65143)
-- Name: Position id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Position" ALTER COLUMN id SET DEFAULT nextval('public."Position_id_seq"'::regclass);


--
-- TOC entry 4942 (class 0 OID 65155)
-- Dependencies: 219
-- Data for Name: Alarma; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Alarma" (id, nombre, created_at, update_at, devices, estado, typealarma_id) FROM stdin;
aec007eb-0236-4d61-acfb-184aefe65fee	pruebas	2024-02-18 11:41:02.42	\N	{867959034960467}	ACTIVADA	633a6392-2173-4e66-8347-11e187550e93
25c20cea-1a62-4036-8a39-6dcd857b86f3	demostracion	2024-02-18 11:47:43.175	\N	{867959034960467}	DESACTIVADA	633a6392-2173-4e66-8347-11e187550e93
\.


--
-- TOC entry 4949 (class 0 OID 65208)
-- Dependencies: 226
-- Data for Name: Circle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Circle" (id, radius, latitude, longitude, polygon_id) FROM stdin;
9853b2f8-cce8-48d3-a34d-d25848d7fc40	5	-17.787149	-63.191432	b9817e9c-4aa0-4884-8661-6c104286b24d
\.


--
-- TOC entry 4950 (class 0 OID 65214)
-- Dependencies: 227
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Client" (id, ci, fullname, address, phone, created_at, update_at, user_id) FROM stdin;
62e2af99-c34f-44ec-ac4f-36def2aa1620	97388	Eduardo	SN	7245234	2023-12-21 22:23:05.655	2023-12-21 22:23:05.655	485a9f0c-f9c6-478b-b07d-80ea0499fede
d4970abe-eded-4040-a9f9-27942eceb9ce	123	Admin	SN	321	2024-02-18 13:19:22.588	\N	88e55d8d-5670-4a28-aaec-6ddc1751607c
78c5110c-31a4-49d0-a2fa-813bf8796edf	321	Vian motos	SN	123	2024-02-18 13:19:22.89	\N	ac66509c-4899-421a-b385-a9b2c30c4683
\.


--
-- TOC entry 4954 (class 0 OID 65248)
-- Dependencies: 231
-- Data for Name: Dispositivo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Dispositivo" (id, serial, chipgsm, megas, estado, created_at, update_at) FROM stdin;
1	867959034960467	7312254	\N	ENUSO	2023-12-21 22:23:05.223	2023-12-21 22:23:05.223
\.


--
-- TOC entry 4945 (class 0 OID 65183)
-- Dependencies: 222
-- Data for Name: Geofence; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Geofence" (id, nombre, created_at, update_at, "typegeofenceId") FROM stdin;
7f2ebcca-6997-412d-80d6-1e758da9b26e	radios de 5 metros	2024-02-18 12:53:02.328	\N	87362d14-4a11-4dc8-98b6-be4be1fdefc4
\.


--
-- TOC entry 4947 (class 0 OID 65196)
-- Dependencies: 224
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Location" (id, latitude, longitude, polygon_id) FROM stdin;
\.


--
-- TOC entry 4951 (class 0 OID 65225)
-- Dependencies: 228
-- Data for Name: Moto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Moto" (id, marca, modelo, anio, placa, motor, color, peso, kilometraje, estado, fecha_compra, precio_compra, created_at, update_at, client_id, sucrusal_id) FROM stdin;
98656436-aee9-4607-b784-97165725825e	Honda	XR200	2019	197DSA	160	Negro	254.00	5150.00	1	2023-12-21 22:23:05.653	14000.00	2023-12-21 22:23:05.655	2023-12-21 22:23:05.655	62e2af99-c34f-44ec-ac4f-36def2aa1620	\N
\.


--
-- TOC entry 4952 (class 0 OID 65240)
-- Dependencies: 229
-- Data for Name: MotoDispo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MotoDispo" (id, moto_id, dispositivo_id, created_at, update_at) FROM stdin;
f3c38aa7-1c46-4c70-9cbe-b4417b4f4285	98656436-aee9-4607-b784-97165725825e	1	2023-12-21 22:23:05.655	2023-12-21 22:23:05.655
\.


--
-- TOC entry 4948 (class 0 OID 65202)
-- Dependencies: 225
-- Data for Name: Polygon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Polygon" (id, typegeo_id) FROM stdin;
b9817e9c-4aa0-4884-8661-6c104286b24d	7f2ebcca-6997-412d-80d6-1e758da9b26e
\.


--
-- TOC entry 4940 (class 0 OID 65140)
-- Dependencies: 217
-- Data for Name: Position; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Position" (id, date, latitude, longitude, "timestamp", speed, batt, dispositivo_id) FROM stdin;
1	2023-12-21 22:23:05.223	-17.752086	-63.162889	\N	\N	\N	1
2	2023-12-21 22:23:05.223	-17.750179	-63.173257	\N	\N	\N	1
3	2023-12-21 22:23:05.223	-17.749882	-63.180113	\N	\N	\N	1
4	2023-12-21 22:23:05.223	-17.750507	-63.186344	\N	\N	\N	1
\.


--
-- TOC entry 4955 (class 0 OID 65258)
-- Dependencies: 232
-- Data for Name: Role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Role" (id, nombre, descripcion) FROM stdin;
36de3b56-a903-4902-b446-d920feefe1e6	Admin	El administrador tiene poderes amplios para supervisar, mantener y asegurar el correcto funcionamiento del sistema, gestionando usuarios, seguridad, actualizaciones y resolviendo problemas técnicos, además de tomar decisiones cruciales para el sistema o la organización.
85937ab8-6fe2-4570-b92b-c1b860575815	Mensajero	
\.


--
-- TOC entry 4944 (class 0 OID 65177)
-- Dependencies: 221
-- Data for Name: Sucrusal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Sucrusal" (id, nombre, direccion, latitude, longitude) FROM stdin;
5fc40c9e-ac07-4a6e-b2d0-b6ce634a5034	SUCURSAL HONDA 3ER ANILLO CRISTO REDENTOR	Cristo redentor 3er Anillo	-17.758127	-63.179039
4a306819-642a-495e-9d83-a305ad8bb0ca	SUCURSAL HONDA 6TO ANILLO CRISTO REDENTOR	Cristo redentor 6to anillo	-17.741541	-63.171199
557594a8-2a76-4cf7-9341-d1313a0bced5	SUCURSAL HONDA 4TO ANILLO VENTURA	4to anillo zona Ventura Mall	-17.753428	-63.196273
b0a10da7-7d16-4c62-9fb0-b8d07b7b4bb8	SUCURSAL HONDA 2DO ANILLO AV. BRASIL	2do anillo Av. Brasil	-17.790358	-63.165598
43989822-a9b4-448b-a1d5-3a032981ea7f	SUCURSAL HONDA URUBÓ	Carretera Santa Cruz camino a Porongo	-17.763069	-63.235758
3998a816-dcb9-4301-a113-e86a4822e699	SUCURSAL HONDA 3ER ANILLO INDANA	Av. Roque Aguilera 3er anillo frente comercial Indana	-17.797282	-63.209162
04241681-d12b-424d-9faa-30570883a57f	SUCURSAL HONDA 3ER ANILLO CRISTO REDENTOR	Cristo redentor 3er Anillo	-17.758127	-63.179039
0eb9cf50-eed6-49ae-9395-c72e4ff1414f	SUCURSAL HONDA 6TO ANILLO CRISTO REDENTOR	Cristo redentor 6to anillo	-17.741541	-63.171199
9700c95c-db57-4f0b-9923-de74a19c9206	SUCURSAL HONDA 4TO ANILLO VENTURA	4to anillo zona Ventura Mall	-17.753428	-63.196273
717c58d8-6450-4f9a-8a9c-a708ce4ed5b8	SUCURSAL HONDA 2DO ANILLO AV. BRASIL	2do anillo Av. Brasil	-17.790358	-63.165598
52e2e679-c0e4-4e29-ab07-0d96dd6e2af7	SUCURSAL HONDA URUBÓ	Carretera Santa Cruz camino a Porongo	-17.763069	-63.235758
9a35d78b-f045-4ea9-abfc-036f3fd4b3f5	SUCURSAL HONDA 3ER ANILLO INDANA	Av. Roque Aguilera 3er anillo frente comercial Indana	-17.797282	-63.209162
\.


--
-- TOC entry 4941 (class 0 OID 65147)
-- Dependencies: 218
-- Data for Name: TypeAlarma; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."TypeAlarma" (id, name) FROM stdin;
633a6392-2173-4e66-8347-11e187550e93	TestAlarm
\.


--
-- TOC entry 4946 (class 0 OID 65190)
-- Dependencies: 223
-- Data for Name: Typegeofence; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Typegeofence" (id, in_out, "isBoth", typealarma_id) FROM stdin;
87362d14-4a11-4dc8-98b6-be4be1fdefc4	t	f	633a6392-2173-4e66-8347-11e187550e93
\.


--
-- TOC entry 4957 (class 0 OID 65359)
-- Dependencies: 234
-- Data for Name: Typeparked; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Typeparked" (id, limit_minutes, typealarma_id) FROM stdin;
\.


--
-- TOC entry 4956 (class 0 OID 65267)
-- Dependencies: 233
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, username, password, email, avatar, "isAdmin", status, created_at, update_at, role_id) FROM stdin;
88e55d8d-5670-4a28-aaec-6ddc1751607c	admin	$2b$08$gW7EZKmuDBoFkGPSylrR1OF9g5oTF408UXuwegrpqfi4SUVmNib9S	admin@prisma.io		t	ACTIVO	2023-12-21 22:23:03.76	2023-12-21 22:23:03.76	36de3b56-a903-4902-b446-d920feefe1e6
ac66509c-4899-421a-b385-a9b2c30c4683	vian1	$2b$08$sbB.IzVpRyBlYVSFAQGVQ.OJfGhR/aNWcBo50rF.V0NY3WV3IdiRm	vian@honda.com		t	ACTIVO	2023-12-21 22:23:03.76	2023-12-21 22:23:03.76	36de3b56-a903-4902-b446-d920feefe1e6
485a9f0c-f9c6-478b-b07d-80ea0499fede	eduardo	$2b$08$aDB2SGG3W9A/QEKIUcQp8efQ02H/52BMHzTJj1IRnK.E9a1eeN5ya	Edu@prisma.io		f	ACTIVO	2023-12-21 22:23:05.401	2023-12-21 22:23:05.401	85937ab8-6fe2-4570-b92b-c1b860575815
\.


--
-- TOC entry 4943 (class 0 OID 65165)
-- Dependencies: 220
-- Data for Name: UserAlarma; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserAlarma" (id, inicio, fin, "isTemp", emails, discord, telegram, alarma_id, user_id, created_at, update_at) FROM stdin;
4f54fad5-7576-432b-862a-b05697f6aaf2	19:30:00.477	07:00:00.03	f	{luhpelayo@gmail.com,waltermj2012@gmail.com}	t	t	aec007eb-0236-4d61-acfb-184aefe65fee	88e55d8d-5670-4a28-aaec-6ddc1751607c	2024-02-18 13:23:51.207	\N
\.


--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 230
-- Name: Dispositivo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Dispositivo_id_seq"', 1, true);


--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 216
-- Name: Position_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Position_id_seq"', 4, true);


--
-- TOC entry 4744 (class 2606 OID 65164)
-- Name: Alarma Alarma_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Alarma"
    ADD CONSTRAINT "Alarma_pkey" PRIMARY KEY (id);


--
-- TOC entry 4759 (class 2606 OID 65213)
-- Name: Circle Circle_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Circle"
    ADD CONSTRAINT "Circle_pkey" PRIMARY KEY (id);


--
-- TOC entry 4762 (class 2606 OID 65224)
-- Name: Client Client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_pkey" PRIMARY KEY (id);


--
-- TOC entry 4770 (class 2606 OID 65257)
-- Name: Dispositivo Dispositivo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dispositivo"
    ADD CONSTRAINT "Dispositivo_pkey" PRIMARY KEY (id);


--
-- TOC entry 4751 (class 2606 OID 65189)
-- Name: Geofence Geofence_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Geofence"
    ADD CONSTRAINT "Geofence_pkey" PRIMARY KEY (id);


--
-- TOC entry 4755 (class 2606 OID 65201)
-- Name: Location Location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_pkey" PRIMARY KEY (id);


--
-- TOC entry 4768 (class 2606 OID 65246)
-- Name: MotoDispo MotoDispo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_pkey" PRIMARY KEY (id);


--
-- TOC entry 4765 (class 2606 OID 65239)
-- Name: Moto Moto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_pkey" PRIMARY KEY (id);


--
-- TOC entry 4757 (class 2606 OID 65207)
-- Name: Polygon Polygon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Polygon"
    ADD CONSTRAINT "Polygon_pkey" PRIMARY KEY (id);


--
-- TOC entry 4740 (class 2606 OID 65146)
-- Name: Position Position_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Position"
    ADD CONSTRAINT "Position_pkey" PRIMARY KEY (id);


--
-- TOC entry 4773 (class 2606 OID 65266)
-- Name: Role Role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);


--
-- TOC entry 4749 (class 2606 OID 65182)
-- Name: Sucrusal Sucrusal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Sucrusal"
    ADD CONSTRAINT "Sucrusal_pkey" PRIMARY KEY (id);


--
-- TOC entry 4742 (class 2606 OID 65154)
-- Name: TypeAlarma TypeAlarma_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TypeAlarma"
    ADD CONSTRAINT "TypeAlarma_pkey" PRIMARY KEY (id);


--
-- TOC entry 4753 (class 2606 OID 65195)
-- Name: Typegeofence Typegeofence_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Typegeofence"
    ADD CONSTRAINT "Typegeofence_pkey" PRIMARY KEY (id);


--
-- TOC entry 4779 (class 2606 OID 65365)
-- Name: Typeparked Typeparked_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Typeparked"
    ADD CONSTRAINT "Typeparked_pkey" PRIMARY KEY (id);


--
-- TOC entry 4747 (class 2606 OID 65176)
-- Name: UserAlarma UserAlarma_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_pkey" PRIMARY KEY (id);


--
-- TOC entry 4776 (class 2606 OID 65279)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 4760 (class 1259 OID 65281)
-- Name: Client_ci_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Client_ci_key" ON public."Client" USING btree (ci);


--
-- TOC entry 4763 (class 1259 OID 65282)
-- Name: Client_user_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Client_user_id_key" ON public."Client" USING btree (user_id);


--
-- TOC entry 4766 (class 1259 OID 65283)
-- Name: MotoDispo_moto_id_dispositivo_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MotoDispo_moto_id_dispositivo_id_idx" ON public."MotoDispo" USING btree (moto_id, dispositivo_id);


--
-- TOC entry 4771 (class 1259 OID 65284)
-- Name: Role_nombre_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Role_nombre_key" ON public."Role" USING btree (nombre);


--
-- TOC entry 4745 (class 1259 OID 65280)
-- Name: UserAlarma_alarma_id_user_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "UserAlarma_alarma_id_user_id_idx" ON public."UserAlarma" USING btree (alarma_id, user_id);


--
-- TOC entry 4774 (class 1259 OID 65286)
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- TOC entry 4777 (class 1259 OID 65285)
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- TOC entry 4781 (class 2606 OID 65292)
-- Name: Alarma Alarma_typealarma_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Alarma"
    ADD CONSTRAINT "Alarma_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4788 (class 2606 OID 65322)
-- Name: Circle Circle_polygon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Circle"
    ADD CONSTRAINT "Circle_polygon_id_fkey" FOREIGN KEY (polygon_id) REFERENCES public."Polygon"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4789 (class 2606 OID 65327)
-- Name: Client Client_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4784 (class 2606 OID 65307)
-- Name: Geofence Geofence_typegeofenceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Geofence"
    ADD CONSTRAINT "Geofence_typegeofenceId_fkey" FOREIGN KEY ("typegeofenceId") REFERENCES public."Typegeofence"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4786 (class 2606 OID 65312)
-- Name: Location Location_polygon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_polygon_id_fkey" FOREIGN KEY (polygon_id) REFERENCES public."Polygon"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4792 (class 2606 OID 65347)
-- Name: MotoDispo MotoDispo_dispositivo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_dispositivo_id_fkey" FOREIGN KEY (dispositivo_id) REFERENCES public."Dispositivo"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4793 (class 2606 OID 65342)
-- Name: MotoDispo MotoDispo_moto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_moto_id_fkey" FOREIGN KEY (moto_id) REFERENCES public."Moto"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4790 (class 2606 OID 65332)
-- Name: Moto Moto_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4791 (class 2606 OID 65337)
-- Name: Moto Moto_sucrusal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_sucrusal_id_fkey" FOREIGN KEY (sucrusal_id) REFERENCES public."Sucrusal"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4787 (class 2606 OID 65904)
-- Name: Polygon Polygon_typegeo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Polygon"
    ADD CONSTRAINT "Polygon_typegeo_id_fkey" FOREIGN KEY (typegeo_id) REFERENCES public."Geofence"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4780 (class 2606 OID 65287)
-- Name: Position Position_dispositivo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Position"
    ADD CONSTRAINT "Position_dispositivo_id_fkey" FOREIGN KEY (dispositivo_id) REFERENCES public."Dispositivo"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4785 (class 2606 OID 65366)
-- Name: Typegeofence Typegeofence_typealarma_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Typegeofence"
    ADD CONSTRAINT "Typegeofence_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4795 (class 2606 OID 65371)
-- Name: Typeparked Typeparked_typealarma_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Typeparked"
    ADD CONSTRAINT "Typeparked_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4782 (class 2606 OID 65297)
-- Name: UserAlarma UserAlarma_alarma_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_alarma_id_fkey" FOREIGN KEY (alarma_id) REFERENCES public."Alarma"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4783 (class 2606 OID 65302)
-- Name: UserAlarma UserAlarma_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4794 (class 2606 OID 65352)
-- Name: User User_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2024-02-19 19:44:47

--
-- PostgreSQL database dump complete
--

