/**
* (c) 2016 Tieto Finland Oy
* Licensed under the MIT license.
*/
'use strict';
angular.module('dashboard')
    .constant('CONST', {
        'MENU': {
            CLOSED: 0,
            HALF: 1,
            FULL: 2
        },
        'PROPOSALEVENT': 'PROPOSALEVENT',
        'PROPOSALSHASUNSAVED': 'PROPOSALSHASUNSAVED',
        'REMARKISUNSAVED': 'REMARKISUNSAVED',
        'PROPOSALDELETED': 'PROPOSALDELETED',
        'TOPICMINUTEUPDATED': 'TOPICMINUTEUPDATED',
        'MOTIONSUPDATED': 'MOTIONSUPDATED',
        'UNSAVEMEETINGDDATA': 'UNSAVEMEETINGDDATA',
        'MEETINGPARALLELMODE': 'MEETINGPARALLELMODE',
        'POLLINGTIMEOUT': 10000,
        'PROGRESSDLGMINDURATIONMS': 900,
        'MOTIONDATA': { loading: false, objects: [] },
        'NOTFOUND': -1,
        'DBLANG': {
            FI: { langCode: 'fi', flagIconPath: 'images/flag-fi.svg' },
            SV: { langCode: 'sv', flagIconPath: 'images/flag-sv.svg' },
        },
        'HTTPSTATUS': {
            K200: { value: 200, strId: null }
        },
        'MTGAPICODES': {
            K1001: { value: 1001, strId: 'STR_REST_RES_1001' },
            K1002: { value: 1002, strId: 'STR_REST_RES_1002' },
            K1003: { value: 1003, strId: 'STR_REST_RES_1003' },
            K1004: { value: 1004, strId: 'STR_REST_RES_1004' },
            K1005: { value: 1005, strId: 'STR_REST_RES_1005' },
            K1007: { value: 1007, strId: 'STR_REST_RES_1007' },
            K1008: { value: 1008, strId: 'STR_REST_RES_1008' }
        },
        'GENERALERROR': { 'errorCode': -1 },
        'ID': 'id',
        'BLOCKMODE': {
            DEFAULT: 0,
            PRIMARY: 1,
            SECONDARY: 2
        },
        'PRIMARYMODE': {
            DEFAULT: 'DEFAULT',
            SECRET: 'SECRET',
            HIDDEN: 'HIDDEN'
        },
        'SECONDARYMODE': {
            PROPOSALS: 'PROPOSALS',
            ATTACHMENTS: 'ATTACHMENTS',
            MATERIALS: 'MATERIALS',
            REMARK: 'REMARK',
            SECRET: 'SECRET',
            DECISIONS: 'DECISIONS',
            MOTIONS: 'MOTIONS'
        },
        'HOMEMODE': {
            ALL: 0,
            MEETINGS: 1,
            ESIGN: 2
        },
        'APPSTATE': {
            APP: "app",
            LOGIN: "app.login",
            INFO: "app.info",
            HOME: "app.home",
            OVERVIEW: "app.overview",
            MEETING: "app.meeting",
            SIGN: "app.sign",
            DOCSIGNERS: 'app.sign.docsigners',
            SIGNLISTATT: 'app.sign.signattlist',
            MEETINGDETAILS: "app.meeting.details",
            TOPIC: "app.meeting.details.topic",
            LISTPROPOSALS: "app.meeting.details.list.proposals",
            REMARK: "app.meeting.details.list.remark",
            ERROR: "error"
        },
        'MTGROLE': {
            NONE: 0,
            CHAIRMAN: 1,
            PARTICIPANT_FULL: 2,
            DEMONSTRATOR: 3,
            SECRETARY: 4,
            PARTICIPANT_LIMITED: 5,
            TRANSLATOR: 6,
            INFORMER: 7,
            NO_ROLE: 8
        },
        'MTGTYPE': {
            DEFAULT: 0,
            CITY_COUNCIL: 1
        },
        'KEY': {
            TESTENV_USERID: 'testenvuserid',
            TOPIC: 'topic',
            LIST_ATT: 'listattdata',
            SELECTION_DATA: 'selectiondata',
            VISIBLE_MTGS: 'visiblemeetings',
            SIGNING_RES: 'signingres',
            MEETING_ITEM: 'meetingitem',
            PROPOSAL_EVENT_ARRAY: 'proposaleventarray',
            MOTION_DATA: 'motionarray',
            SIGN_ITEM: 'signitem',
            VALUE: 'value',
            STATE_ID: 'stateId'
        },
        'BTNTYPE': {
            DEFAULT: 'btn-default',
            PRIMARY: 'btn-primary',
            SUCCESS: 'btn-success'
        },
        'PUBLICITY': {
            NONE: 0,
            PUBLIC: 1,
            SECRET: 2
        },
        'MTGSTATUS': {
            RESERVED: { stateId: 0, stringId: 'STR_RESERVED_MEETING', badgeClass: 'db-badge-dark' },
            CREATED: { stateId: 1, stringId: 'STR_CREATED', badgeClass: 'db-badge-dark' },
            TECHNICALLY_OPEN: { stateId: 2, stringId: 'STR_TECHNICALLY_OPEN', badgeClass: 'db-badge-yel' },
            ACTIVE: { stateId: 3, stringId: 'STR_ACTIVE', badgeClass: 'db-badge-gre' },
            ABORTED: { stateId: 4, stringId: 'STR_ABORTED', badgeClass: 'db-badge-pur' },
            OFFICIALLY_CLOSED: { stateId: 5, stringId: 'STR_OFFICIALLY_CLOSED', badgeClass: 'db-badge-gra' },
            RECORDS_MOVED: { stateId: 6, stringId: 'STR_RECORDS_MOVED', badgeClass: 'db-badge-gra' },
            TECHNICALLY_CLOSED: { stateId: 7, stringId: 'STR_TECNICALLY_CLOSED', badgeClass: 'db-badge-gra' },
        },
        'MEETINGSTATUSACTIONS': {
            OPEN: { stateId: 3, stringId: 'STR_OPEN', active: [2], actionId: 3 },
            ABORT: { stateId: 4, stringId: 'STR_ABORT', active: [3], actionId: 4 },
            CONTINUE: { stateId: 3, stringId: 'STR_CONTINUE', active: [4], actionId: 8 },
            CLOSE: { stateId: 5, stringId: 'STR_READY', active: [3], actionId: 5 }
        },
        'MTGEVENT': {
            LASTEVENTID: 'LastEventId',
            REMARKPUBLISHED: 'RemarkPublishedEvent',
            REMARKUNPUBLISHED: 'RemarkUnPublishedEvent',
            REMARKUPDATED: 'PublishRemarkUpdateEvent',
            REMARKDELETED: 'RemarkDeletedEvent',
            MEETINGSTATECHANGED: 'MeetingStateChangedEvent',
            TOPICSTATECHANGED: 'TopicStateChangedEvent',
            TOPICEDITED: 'TopicEditedEvent',
            LOGGEDOUT: 'PersonLoggedOutEvent',
            MINUTEUPDATED: 'MinuteEntryUpdateEvent',
            MINUTEDELETED: 'MinuteEntryDeletedEvent',
            MINUTETYPECHANGED: 'MinuteEntryUpdateTypeChangedEvent',
            MOTIONSUPPORTED: 'MotionSupportedEvent'
        },
        'TOPICSTATUS': {
            PENDING: { stateId: 1, iconPath: "images/mtg-states/mtg-ag-state-1.png", stringId: 'STR_TOPIC_STATUS_PENDING' },
            ACTIVE: { stateId: 2, iconPath: "images/mtg-states/mtg-ag-state-2.png", stringId: 'STR_TOPIC_STATUS_ACTIVE' },
            ABORTED: { stateId: 3, iconPath: "images/mtg-states/mtg-ag-state-3.png", stringId: 'STR_TOPIC_STATUS_ABORTED' },
            READY: { stateId: 4, iconPath: "images/mtg-states/mtg-ag-state-4.png", stringId: 'STR_TOPIC_STATUS_READY' }
        },
        'TOPICSTATUSACTIONS': {
            OPEN: { stringId: 'STR_OPEN', active: [1, 4], hidden: [], actionId: 2 },
            ABORT: { stringId: 'STR_ABORT', active: [2], hidden: [], actionId: 3 },
            CONTINUE: { stringId: 'STR_CONTINUE', active: [3], hidden: [], actionId: 8 },
            CLOSE: { stringId: 'STR_READY', active: [2], hidden: [], actionId: 4 }
        },
        'MTGVOTING': {
            YEA: { id: 1, stringId: 'STR_VOTE_YEA' },
            NAY: { id: 2, stringId: 'STR_VOTE_NAY' },
            EMPTY: { id: 3, stringId: 'STR_VOTE_EMPTY' },
            ABSENT: { id: 4, stringId: 'STR_VOTE_ABSENT' }
        },
        'MOTIONTYPES': {
            'DEFAULT': { id: 1, stringId: 'STR_MOTION' },
            'BUDGET': { id: 2, stringId: 'STR_BUDGET_MOTION' }
        },
        'ESIGNSTATUS': { //SignApi_DocStatuses
            UNSIGNED: { value: 1, stringId: 'STR_UNSIGNED', badgeClass: 'db-badge-ora' },
            REJECTED: { value: 2, stringId: 'STR_REJECTED', badgeClass: 'db-badge-red' },
            SIGNED: { value: 4, stringId: 'STR_SIGNED', badgeClass: 'db-badge-gre' },
            RETURNED: { value: 7, stringId: 'STR_RETURNED', badgeClass: 'db-badge-red' },
            UNDECIDED: { value: 8, stringId: 'STR_UNDECIDED', badgeClass: 'db-badge-dark' }
        },
        'ESIGNTYPE': {// SignApi_DocTypes
            POLICYMAKER: { value: 1, stringId: 'STR_SIGNING_DOC_POLICYMAKER' },
            OFFICIAL: { value: 2, stringId: 'STR_SIGNING_DOC_OFFICIAL' }
        },
        'ESIGNROLE': {
            CM: { value: 1, stringId: 'STR_SROLE_CM' },
            SEC: { value: 2, stringId: 'STR_SROLE_SEC' },
            REV: { value: 3, stringId: 'STR_SROLE_REV' },
            REV_BAK: { value: 4, stringId: 'STR_SROLE_REV_BAK' },
            DISPW: { value: 5, stringId: 'STR_SROLE_DISPW' },
            DMAKER: { value: 6, stringId: 'STR_SROLE_DMAKER' },
            IREV_CONF: { value: 7, stringId: 'STR_SROLE_IREV_CONF' },
            IREV: { value: 8, stringId: 'STR_SROLE_IREV' },
            CONF: { value: 9, stringId: 'STR_SROLE_CONF' }
        }
    })
    .factory('PROPS', function (CONST) {
        return {
            'PUBLISHED': {
                NO: 0,
                YES: 1
            },
            'TYPE': [
                { value: 1, text: "Päätös", roles: [] },
                { value: 2, text: "Esityksen muutos", roles: [], cityCouncilRoles: [], decisionOrder: 1, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 3, text: "Pöydällepanoehdotus", roles: [CONST.MTGROLE.PARTICIPANT_FULL], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], decisionOrder: 3, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 4, text: "Palautusehdotus", roles: [CONST.MTGROLE.PARTICIPANT_FULL], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], decisionOrder: 4, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 5, text: "Vastaehdotus", roles: [CONST.MTGROLE.PARTICIPANT_FULL], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], decisionOrder: 5, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 6, text: "Hylkäysehdotus", roles: [CONST.MTGROLE.PARTICIPANT_FULL], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], decisionOrder: 6, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 7, text: "Ponsi", roles: [], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], decisionOrder: 7, mgtTypes: [CONST.MTGTYPE.CITYCOUNCIL] },
                { value: 8, text: "Eriävä mielipide", roles: [CONST.MTGROLE.PARTICIPANT_FULL], cityCouncilRoles: [CONST.MTGROLE.PARTICIPANT_FULL], mgtTypes: [] },
                { value: 9, text: "Esteellinen", roles: [], cityCouncilRoles: [], mgtTypes: [] },
                { value: 10, text: "Esityksen poisto", roles: [], cityCouncilRoles: [], decisionOrder: 2, mgtTypes: [CONST.MTGTYPE.DEFAULT, CONST.MTGTYPE.CITYCOUNCIL] }
            ],
            'TOGGLE': 'PROPS.TOGGLE',
            'COUNT': 'PROPS.COUNT',
            'UPDATED': 'PROPS.UPDATED',
            'REMOVE': 'PROPS.REMOVE'
        };
    });
