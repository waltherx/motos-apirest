PGDMP  $                    |            motos    16.0    16.0 V    `           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            a           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            b           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            c           1262    16397    motos    DATABASE     z   CREATE DATABASE motos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Bolivia.1252';
    DROP DATABASE motos;
                postgres    false            �            1259    65155    Alarma    TABLE     �  CREATE TABLE public."Alarma" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(40) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    devices text[],
    estado public."EstadoAlarma" DEFAULT 'DESACTIVADA'::public."EstadoAlarma" NOT NULL,
    typealarma_id uuid NOT NULL
);
    DROP TABLE public."Alarma";
       public         heap    postgres    false            �            1259    65208    Circle    TABLE     �   CREATE TABLE public."Circle" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    radius integer NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    polygon_id uuid NOT NULL
);
    DROP TABLE public."Circle";
       public         heap    postgres    false            �            1259    65214    Client    TABLE     �  CREATE TABLE public."Client" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    ci integer NOT NULL,
    fullname character varying(350) NOT NULL,
    address character varying(250) DEFAULT ''::character varying,
    phone character varying(20) DEFAULT ''::character varying,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    user_id uuid
);
    DROP TABLE public."Client";
       public         heap    postgres    false            �            1259    65248    Dispositivo    TABLE     �  CREATE TABLE public."Dispositivo" (
    id integer NOT NULL,
    serial text NOT NULL,
    chipgsm character varying(20) NOT NULL,
    megas timestamp(3) without time zone,
    estado public."EstadoDevice" DEFAULT 'DISPONIBLE'::public."EstadoDevice" NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone
);
 !   DROP TABLE public."Dispositivo";
       public         heap    postgres    false            �            1259    65247    Dispositivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Dispositivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Dispositivo_id_seq";
       public          postgres    false    231            d           0    0    Dispositivo_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Dispositivo_id_seq" OWNED BY public."Dispositivo".id;
          public          postgres    false    230            �            1259    65183    Geofence    TABLE     #  CREATE TABLE public."Geofence" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(120) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone,
    "typegeofenceId" uuid NOT NULL
);
    DROP TABLE public."Geofence";
       public         heap    postgres    false            �            1259    65196    Location    TABLE     �   CREATE TABLE public."Location" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    polygon_id uuid NOT NULL
);
    DROP TABLE public."Location";
       public         heap    postgres    false            �            1259    65225    Moto    TABLE       CREATE TABLE public."Moto" (
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
    DROP TABLE public."Moto";
       public         heap    postgres    false            �            1259    65240 	   MotoDispo    TABLE       CREATE TABLE public."MotoDispo" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    moto_id uuid,
    dispositivo_id integer,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at timestamp(3) without time zone
);
    DROP TABLE public."MotoDispo";
       public         heap    postgres    false            �            1259    65202    Polygon    TABLE     p   CREATE TABLE public."Polygon" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    typegeo_id uuid NOT NULL
);
    DROP TABLE public."Polygon";
       public         heap    postgres    false            �            1259    65140    Position    TABLE     >  CREATE TABLE public."Position" (
    id integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    "timestamp" integer,
    speed numeric(8,6),
    batt numeric(8,6),
    dispositivo_id integer NOT NULL
);
    DROP TABLE public."Position";
       public         heap    postgres    false            �            1259    65139    Position_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Position_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Position_id_seq";
       public          postgres    false    217            e           0    0    Position_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Position_id_seq" OWNED BY public."Position".id;
          public          postgres    false    216            �            1259    65258    Role    TABLE     �   CREATE TABLE public."Role" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(20) NOT NULL,
    descripcion text DEFAULT ''::text
);
    DROP TABLE public."Role";
       public         heap    postgres    false            �            1259    65177    Sucrusal    TABLE     �   CREATE TABLE public."Sucrusal" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(120) NOT NULL,
    direccion character varying(250) NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL
);
    DROP TABLE public."Sucrusal";
       public         heap    postgres    false            �            1259    65147 
   TypeAlarma    TABLE     m   CREATE TABLE public."TypeAlarma" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
     DROP TABLE public."TypeAlarma";
       public         heap    postgres    false            �            1259    65190    Typegeofence    TABLE     �   CREATE TABLE public."Typegeofence" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    in_out boolean DEFAULT false NOT NULL,
    "isBoth" boolean DEFAULT false NOT NULL,
    typealarma_id uuid NOT NULL
);
 "   DROP TABLE public."Typegeofence";
       public         heap    postgres    false            �            1259    65359 
   Typeparked    TABLE     �   CREATE TABLE public."Typeparked" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    limit_minutes integer DEFAULT 0 NOT NULL,
    typealarma_id uuid NOT NULL
);
     DROP TABLE public."Typeparked";
       public         heap    postgres    false            �            1259    65267    User    TABLE       CREATE TABLE public."User" (
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
    DROP TABLE public."User";
       public         heap    postgres    false            �            1259    65165 
   UserAlarma    TABLE     �  CREATE TABLE public."UserAlarma" (
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
     DROP TABLE public."UserAlarma";
       public         heap    postgres    false            w           2604    65251    Dispositivo id    DEFAULT     t   ALTER TABLE ONLY public."Dispositivo" ALTER COLUMN id SET DEFAULT nextval('public."Dispositivo_id_seq"'::regclass);
 ?   ALTER TABLE public."Dispositivo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            S           2604    65143    Position id    DEFAULT     n   ALTER TABLE ONLY public."Position" ALTER COLUMN id SET DEFAULT nextval('public."Position_id_seq"'::regclass);
 <   ALTER TABLE public."Position" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            N          0    65155    Alarma 
   TABLE DATA           e   COPY public."Alarma" (id, nombre, created_at, update_at, devices, estado, typealarma_id) FROM stdin;
    public          postgres    false    219   �r       U          0    65208    Circle 
   TABLE DATA           O   COPY public."Circle" (id, radius, latitude, longitude, polygon_id) FROM stdin;
    public          postgres    false    226   ps       V          0    65214    Client 
   TABLE DATA           d   COPY public."Client" (id, ci, fullname, address, phone, created_at, update_at, user_id) FROM stdin;
    public          postgres    false    227   �s       Z          0    65248    Dispositivo 
   TABLE DATA           b   COPY public."Dispositivo" (id, serial, chipgsm, megas, estado, created_at, update_at) FROM stdin;
    public          postgres    false    231   �t       Q          0    65183    Geofence 
   TABLE DATA           Y   COPY public."Geofence" (id, nombre, created_at, update_at, "typegeofenceId") FROM stdin;
    public          postgres    false    222   =u       S          0    65196    Location 
   TABLE DATA           I   COPY public."Location" (id, latitude, longitude, polygon_id) FROM stdin;
    public          postgres    false    224   �u       W          0    65225    Moto 
   TABLE DATA           �   COPY public."Moto" (id, marca, modelo, anio, placa, motor, color, peso, kilometraje, estado, fecha_compra, precio_compra, created_at, update_at, client_id, sucrusal_id) FROM stdin;
    public          postgres    false    228   �u       X          0    65240 	   MotoDispo 
   TABLE DATA           Y   COPY public."MotoDispo" (id, moto_id, dispositivo_id, created_at, update_at) FROM stdin;
    public          postgres    false    229   {v       T          0    65202    Polygon 
   TABLE DATA           3   COPY public."Polygon" (id, typegeo_id) FROM stdin;
    public          postgres    false    225   �v       L          0    65140    Position 
   TABLE DATA           m   COPY public."Position" (id, date, latitude, longitude, "timestamp", speed, batt, dispositivo_id) FROM stdin;
    public          postgres    false    217   @w       [          0    65258    Role 
   TABLE DATA           9   COPY public."Role" (id, nombre, descripcion) FROM stdin;
    public          postgres    false    232   �w       P          0    65177    Sucrusal 
   TABLE DATA           P   COPY public."Sucrusal" (id, nombre, direccion, latitude, longitude) FROM stdin;
    public          postgres    false    221   �x       M          0    65147 
   TypeAlarma 
   TABLE DATA           0   COPY public."TypeAlarma" (id, name) FROM stdin;
    public          postgres    false    218   >{       R          0    65190    Typegeofence 
   TABLE DATA           M   COPY public."Typegeofence" (id, in_out, "isBoth", typealarma_id) FROM stdin;
    public          postgres    false    223   �{       ]          0    65359 
   Typeparked 
   TABLE DATA           H   COPY public."Typeparked" (id, limit_minutes, typealarma_id) FROM stdin;
    public          postgres    false    234   �{       \          0    65267    User 
   TABLE DATA           z   COPY public."User" (id, username, password, email, avatar, "isAdmin", status, created_at, update_at, role_id) FROM stdin;
    public          postgres    false    233   |       O          0    65165 
   UserAlarma 
   TABLE DATA           �   COPY public."UserAlarma" (id, inicio, fin, "isTemp", emails, discord, telegram, alarma_id, user_id, created_at, update_at) FROM stdin;
    public          postgres    false    220   �}       f           0    0    Dispositivo_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Dispositivo_id_seq"', 1, true);
          public          postgres    false    230            g           0    0    Position_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Position_id_seq"', 4, true);
          public          postgres    false    216            �           2606    65164    Alarma Alarma_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Alarma"
    ADD CONSTRAINT "Alarma_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Alarma" DROP CONSTRAINT "Alarma_pkey";
       public            postgres    false    219            �           2606    65213    Circle Circle_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Circle"
    ADD CONSTRAINT "Circle_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Circle" DROP CONSTRAINT "Circle_pkey";
       public            postgres    false    226            �           2606    65224    Client Client_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Client" DROP CONSTRAINT "Client_pkey";
       public            postgres    false    227            �           2606    65257    Dispositivo Dispositivo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Dispositivo"
    ADD CONSTRAINT "Dispositivo_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."Dispositivo" DROP CONSTRAINT "Dispositivo_pkey";
       public            postgres    false    231            �           2606    65189    Geofence Geofence_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Geofence"
    ADD CONSTRAINT "Geofence_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Geofence" DROP CONSTRAINT "Geofence_pkey";
       public            postgres    false    222            �           2606    65201    Location Location_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Location" DROP CONSTRAINT "Location_pkey";
       public            postgres    false    224            �           2606    65246    MotoDispo MotoDispo_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."MotoDispo" DROP CONSTRAINT "MotoDispo_pkey";
       public            postgres    false    229            �           2606    65239    Moto Moto_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Moto" DROP CONSTRAINT "Moto_pkey";
       public            postgres    false    228            �           2606    65207    Polygon Polygon_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Polygon"
    ADD CONSTRAINT "Polygon_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Polygon" DROP CONSTRAINT "Polygon_pkey";
       public            postgres    false    225            �           2606    65146    Position Position_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Position"
    ADD CONSTRAINT "Position_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Position" DROP CONSTRAINT "Position_pkey";
       public            postgres    false    217            �           2606    65266    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public            postgres    false    232            �           2606    65182    Sucrusal Sucrusal_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Sucrusal"
    ADD CONSTRAINT "Sucrusal_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Sucrusal" DROP CONSTRAINT "Sucrusal_pkey";
       public            postgres    false    221            �           2606    65154    TypeAlarma TypeAlarma_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."TypeAlarma"
    ADD CONSTRAINT "TypeAlarma_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."TypeAlarma" DROP CONSTRAINT "TypeAlarma_pkey";
       public            postgres    false    218            �           2606    65195    Typegeofence Typegeofence_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Typegeofence"
    ADD CONSTRAINT "Typegeofence_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."Typegeofence" DROP CONSTRAINT "Typegeofence_pkey";
       public            postgres    false    223            �           2606    65365    Typeparked Typeparked_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Typeparked"
    ADD CONSTRAINT "Typeparked_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Typeparked" DROP CONSTRAINT "Typeparked_pkey";
       public            postgres    false    234            �           2606    65176    UserAlarma UserAlarma_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."UserAlarma" DROP CONSTRAINT "UserAlarma_pkey";
       public            postgres    false    220            �           2606    65279    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    233            �           1259    65281    Client_ci_key    INDEX     I   CREATE UNIQUE INDEX "Client_ci_key" ON public."Client" USING btree (ci);
 #   DROP INDEX public."Client_ci_key";
       public            postgres    false    227            �           1259    65282    Client_user_id_key    INDEX     S   CREATE UNIQUE INDEX "Client_user_id_key" ON public."Client" USING btree (user_id);
 (   DROP INDEX public."Client_user_id_key";
       public            postgres    false    227            �           1259    65283 $   MotoDispo_moto_id_dispositivo_id_idx    INDEX     q   CREATE INDEX "MotoDispo_moto_id_dispositivo_id_idx" ON public."MotoDispo" USING btree (moto_id, dispositivo_id);
 :   DROP INDEX public."MotoDispo_moto_id_dispositivo_id_idx";
       public            postgres    false    229    229            �           1259    65284    Role_nombre_key    INDEX     M   CREATE UNIQUE INDEX "Role_nombre_key" ON public."Role" USING btree (nombre);
 %   DROP INDEX public."Role_nombre_key";
       public            postgres    false    232            �           1259    65280     UserAlarma_alarma_id_user_id_idx    INDEX     i   CREATE INDEX "UserAlarma_alarma_id_user_id_idx" ON public."UserAlarma" USING btree (alarma_id, user_id);
 6   DROP INDEX public."UserAlarma_alarma_id_user_id_idx";
       public            postgres    false    220    220            �           1259    65286    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    233            �           1259    65285    User_username_key    INDEX     Q   CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);
 '   DROP INDEX public."User_username_key";
       public            postgres    false    233            �           2606    65292     Alarma Alarma_typealarma_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Alarma"
    ADD CONSTRAINT "Alarma_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 N   ALTER TABLE ONLY public."Alarma" DROP CONSTRAINT "Alarma_typealarma_id_fkey";
       public          postgres    false    218    4742    219            �           2606    65322    Circle Circle_polygon_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Circle"
    ADD CONSTRAINT "Circle_polygon_id_fkey" FOREIGN KEY (polygon_id) REFERENCES public."Polygon"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public."Circle" DROP CONSTRAINT "Circle_polygon_id_fkey";
       public          postgres    false    4757    225    226            �           2606    65327    Client Client_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Client" DROP CONSTRAINT "Client_user_id_fkey";
       public          postgres    false    4776    227    233            �           2606    65307 %   Geofence Geofence_typegeofenceId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Geofence"
    ADD CONSTRAINT "Geofence_typegeofenceId_fkey" FOREIGN KEY ("typegeofenceId") REFERENCES public."Typegeofence"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."Geofence" DROP CONSTRAINT "Geofence_typegeofenceId_fkey";
       public          postgres    false    222    223    4753            �           2606    65312 !   Location Location_polygon_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_polygon_id_fkey" FOREIGN KEY (polygon_id) REFERENCES public."Polygon"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 O   ALTER TABLE ONLY public."Location" DROP CONSTRAINT "Location_polygon_id_fkey";
       public          postgres    false    224    225    4757            �           2606    65347 '   MotoDispo MotoDispo_dispositivo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_dispositivo_id_fkey" FOREIGN KEY (dispositivo_id) REFERENCES public."Dispositivo"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public."MotoDispo" DROP CONSTRAINT "MotoDispo_dispositivo_id_fkey";
       public          postgres    false    4770    229    231            �           2606    65342     MotoDispo MotoDispo_moto_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."MotoDispo"
    ADD CONSTRAINT "MotoDispo_moto_id_fkey" FOREIGN KEY (moto_id) REFERENCES public."Moto"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."MotoDispo" DROP CONSTRAINT "MotoDispo_moto_id_fkey";
       public          postgres    false    228    4765    229            �           2606    65332    Moto Moto_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public."Moto" DROP CONSTRAINT "Moto_client_id_fkey";
       public          postgres    false    4762    227    228            �           2606    65337    Moto Moto_sucrusal_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Moto"
    ADD CONSTRAINT "Moto_sucrusal_id_fkey" FOREIGN KEY (sucrusal_id) REFERENCES public."Sucrusal"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Moto" DROP CONSTRAINT "Moto_sucrusal_id_fkey";
       public          postgres    false    4749    221    228            �           2606    65904    Polygon Polygon_typegeo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Polygon"
    ADD CONSTRAINT "Polygon_typegeo_id_fkey" FOREIGN KEY (typegeo_id) REFERENCES public."Geofence"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public."Polygon" DROP CONSTRAINT "Polygon_typegeo_id_fkey";
       public          postgres    false    222    4751    225            �           2606    65287 %   Position Position_dispositivo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Position"
    ADD CONSTRAINT "Position_dispositivo_id_fkey" FOREIGN KEY (dispositivo_id) REFERENCES public."Dispositivo"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."Position" DROP CONSTRAINT "Position_dispositivo_id_fkey";
       public          postgres    false    4770    231    217            �           2606    65366 ,   Typegeofence Typegeofence_typealarma_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Typegeofence"
    ADD CONSTRAINT "Typegeofence_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Z   ALTER TABLE ONLY public."Typegeofence" DROP CONSTRAINT "Typegeofence_typealarma_id_fkey";
       public          postgres    false    4742    218    223            �           2606    65371 (   Typeparked Typeparked_typealarma_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Typeparked"
    ADD CONSTRAINT "Typeparked_typealarma_id_fkey" FOREIGN KEY (typealarma_id) REFERENCES public."TypeAlarma"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 V   ALTER TABLE ONLY public."Typeparked" DROP CONSTRAINT "Typeparked_typealarma_id_fkey";
       public          postgres    false    4742    218    234            �           2606    65297 $   UserAlarma UserAlarma_alarma_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_alarma_id_fkey" FOREIGN KEY (alarma_id) REFERENCES public."Alarma"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 R   ALTER TABLE ONLY public."UserAlarma" DROP CONSTRAINT "UserAlarma_alarma_id_fkey";
       public          postgres    false    4744    220    219            �           2606    65302 "   UserAlarma UserAlarma_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserAlarma"
    ADD CONSTRAINT "UserAlarma_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public."UserAlarma" DROP CONSTRAINT "UserAlarma_user_id_fkey";
       public          postgres    false    220    233    4776            �           2606    65352    User User_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 D   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_role_id_fkey";
       public          postgres    false    233    4773    232            N   �   x���=N�@@�z}
.0����;+���Q���%�B�׈������%@]���� U�����>.���51����&�	yTN���U���P����4�^��L�MS�0�*Z�(���1��;crcP�-ե��}��,�6Ik���������oK�TF*�o������8�]�D\      U   X   x�˹� �zH_�l�u8�$�yAU�p��ڥ+��-�m5��`�F���M��ǓE���2������~�n������P      V   �   x�u�9n1Ek�)|$EI�t)Һ	���.lY�M�#	|���y�O3hQ&����s��)3+Q5��o����v	�%q������ļs�1�sJ��E����Z)Z�b�8�l�>�.V�뀵t�2�b£�jm�^���8t"Ӂ@�ŝlg>�e}�ՑR�)qVp_Es�J���mE["Zj�\@�/*O�X�ˣ�_��������y����j�[�	���z�09Ԩi���"6���y۶�A]�      Z   G   x�uȹ�0�X���NvNj����Al�Jgֈ!�#ų�L�pڋ��>7A`MѠ0aS����;3 ��      Q   o   x����  �3L�5�(�^��ă1ѿ�{u��9;��*0��D-�V�ho������|A-�p��}>G�"J@�s�#m�ĝ���
)2pG�)�d��p����ܼ�%�       S      x������ � �      W   �   x�uʡ�@P��
~ �$��zu� P`5G����/(hP���j��[DEu*x/�b-�V�z����\�.BB\�k9]��N0�㵁�v�il�IޙddA�� y ��2�}�o`w���֊s�Uc�6�-����.Ә�.��4�-�      X   ^   x�uȹ� @�P�b��P,� ���"P����s΀lu莆���R�X�*��H7�������T���%�)l��r����v����������      T   G   x����@ ���0�ы.�/����6%��*�6a�b��>��N�C!�3����d��{�{-      L   a   x��ͱ� D��� ��a�L��s���*H�}�j�:�fRC�e�o!5�ht�a�;D^������vR����sQ@OZn�*�i�RN:s��U�-      [     x�E�=n�0�g�<�U8��=v��t�%:P������عG��J��$����~2ԯ�pi{5,m��a��Y�v#��DS�l�Ջ<�2���R أ!��wgc�!���jrC�C�`�Kad :2�������d4�K�A�P��.�%dqh�A�M�sAg?�@H�H�����quJ��_:X}�ѐ�&1���1�m��k.ڢ��7��@'�/f���T��ҟq�մQ���ܪu�V�O�<��y�Oc�J!�;q�귧�� ꐁ�      P   Z  x���KnA���)����]�1�$�`�ʦ�1�1d�k�H�X�9��,̲{����W��le�
�e K�B�EB�zc�Ic'��lӭۅ��Z޶��u�]����u���Jtw�w��U7�����^�������h��n���
���a�LU@i��d��
�[M`�U��S��.������|���V9��|��CK46��XEeH�\����?��n�vb�8�e?�x`�q$�v�srcu|%���4I�����Nd�����"C
ɦ/�����>L�M׮狉.o��;ߎ��=S�cw�z�06�`Ĩ5&�����j4FU)���M����c2�q��ʩ�4H������/�����x����o�6\plb��9KN�H�Xe�FO�ǩ�����l'�t��۱���ݝF9	v�ޏ\zy�TǼ����:tԯIT^7�j��<~i����'�.���E|���&̽�Pk��Gb�:�AW���*�����c���.CI���	��R�%����?��],�W���	"a��s��p���ʖ�,+�_5%��dA_����p�+�����1�N�>�4�7}��������u�4�/����      M   <   x�336N43�4�5247�5I53ӵ061�54L5�0755H�4�I-.q�I,������ <|H      R   L   x����0�s�e}n@Bz�����3����	�+�c:f�L��gY��)�:\{EeSX�#��d�繳�����eD�      ]      x������ � �      \   �  x����n�PE��Wt���s��7��;*�6�&��L�Ƙ�Ҋ|}�V�:a������V*�!Sn�c��#� S?��hB��d�M���t�����ss~>�d���9G��r�v�����ͦ����_���ؿ&��(��>��vQ�J>PzE��$��b&}`VH0p�,���؅�dl�����N�˔x�X�:.�~�fOޥ^l�����>g��m�Ϫ����]W<�S�ܺlx̓��l۲����q�4�I�8�_'���:贓�Se�b�Aa0ȵ�Q�'s�㻕��hSl�g�j�(7�:��UHo��f�n_�w_IY��\�R�M4����.K��#��+�Yj��
\���jj��$�T("��$��ߡ4�      O   �   x�E�Kn�0D��)z�Ҡ(�T��	z�lh��6	�"�ݫ�����fr�ܭ1(�@N�B2X��]�:�xX.�sV���L���v���f?���n��\���m7��_����g��WD���8l�j_!�l�]���R���,���
� AZ�Q9
j���� _bZ(-gB���4O���S9�     